import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // Adjust this path as needed

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };