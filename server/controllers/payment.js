"use server";
import { nanoid } from "nanoid";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function initiatePayment(data, email, name, password) {
  const transactionId = "Tr-" + nanoid(6); // Using nanoid to generate random id

  // Hash the password
  const hashedPassword = await hashing(password);

  // Create a new user in the database
  const user = await prisma.user.findFirst({
    data: {
      email: email,
      name: name,
      password: hashedPassword,
    },
  });

  const payload = {
    merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
    merchantTransactionId: transactionId,
    merchantUserId: user.id,
    amount: 100 * data, // Amount in smallest currency unit
    redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/status/${transactionId}`,
    redirectMode: "REDIRECT",
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/status/${transactionId}`,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const dataPayload = JSON.stringify(payload);
  const dataBase64 = Buffer.from(dataPayload).toString("base64");

  const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
  const dataSha256 = crypto.createHash("sha256").update(fullURL).digest("hex");

  const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

  const UAT_PAY_API_URL = `${process.env.NEXT_PUBLIC_PHONE_PAY_HOST_URL}/pg/v1/pay`;

  try {
    const response = await fetch(UAT_PAY_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      body: JSON.stringify({ request: dataBase64 }),
    });

    const responseData = await response.json();

    return {
      redirectUrl: responseData.data.instrumentResponse.redirectInfo.url,
      transactionId: transactionId,
    };
  } catch (error) {
    console.error("Error in server action:", error);
    throw error;
  }
}

// Function to hash passwords using bcrypt
const bcrypt = require("bcryptjs");

async function hashing(plainTextPassword) {
  if (!plainTextPassword) {
    return null;
  }

  const saltRounds = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

  return hashedPassword;
}
