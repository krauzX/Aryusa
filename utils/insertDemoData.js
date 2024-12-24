const { PrismaClient } = require("@prisma/client");
const { log } = require("console");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();
const folderPath = "../../public";
const Categoory = {
  Cosmetics: "4f534942-8b1c-49f8-8396-2eb158111218",
  ayurvedic: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
  allopathic: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
  Nutraceuticals: "782e7829-806b-489f-8c3a-2689548d7153",
  face_wash: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
};

const demoProducts = [
  {
    id: "1",
    title: "aryliv",
    price: 220,
    rating: 5,
    description: "ARYLIV is good",
    mainImage: "",
    slug: "ARYLIV",
    categoryId: Categoory.ayurvedic,
    inStock: 1,
  },
  {
    id: "2",
    title: "NIHYDRA",
    price: 240,
    rating: 0,
    description: "This is NIHYDRA description",
    mainImage: "",
    slug: "NIHYDRA",
    categoryId: Categoory.Cosmetics,
    inStock: 0,
  },
  {
    id: "3",
    title: "SKINEXFOLIA",
    price: 250,
    rating: 4,
    mainImage: "",
    description: "This is SKINEXFOLIA.jpg description",
    slug: "SKINEXFOLIA",
    categoryId: Categoory.allopathic,
    inStock: 1,
  },
  {
    id: "4",
    title: "gloryds",
    price: 21,
    rating: 5,
    description: "This is gloryds1 description",
    mainImage: "",
    slug: "gloryds",
    categoryId: Categoory.face_wash,
    inStock: 1,
  },
];

const demoCategories = [
  {
    id: Categoory.Cosmetics,
    name: "Cosmetics",
  },
  {
    id: Categoory.allopathic,
    name: "Allopathic",
  },
  {
    id: Categoory.Nutraceuticals,
    name: "Nutraceuticals",
  },
  {
    id: Categoory.face_wash,
    name: "face-wash",
  },

  {
    id: Categoory.ayurvedic,
    name: "Ayurvedic",
  },
];

function listImageFiles(folderPath, demoProducts) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    // Create a mapping of products to their image files
    const productImages = files.reduce((acc, file) => {
      const ext = path.extname(file).toLowerCase();
      if (
        ext === ".jpg" ||
        ext === ".jpeg" ||
        ext === ".png" ||
        ext === ".gif" ||
        ext === ".bmp" ||
        ext === ".tiff"
      ) {
        const fileNameWithoutExt = path.basename(file, ext).toLowerCase();
        acc[fileNameWithoutExt] = file;
      }
      return acc;
    }, {});

    // Assign the image file to each product
    demoProducts.forEach((product) => {
      const productName = product.title.toLowerCase();
      if (productImages[productName]) {
        product.mainImage = `${productImages[productName]}`;
      } else {
        console.warn(`No image found for product: ${product.title}`);
      }
    });

    console.log("Image URLs assigned to demo products.");
  });
}

listImageFiles(folderPath, demoProducts);

async function insertDemoData() {
  for (const category of demoCategories) {
    const existingCategory = await prisma.category.findUnique({
      where: { id: category.id },
    });
    if (!existingCategory) {
      console.log(`Creating category: ${category.name}`);
      await prisma.category.create({ data: category });
    } else {
      console.log(`Category already exists: ${category.name}`);
    }
  }
  console.log("Demo categories processed successfully!");

  for (const product of demoProducts) {
    const existingProduct = await prisma.product.findUnique({
      where: { id: product.id },
    });
    if (!existingProduct) {
      console.log(`Creating product: ${product.title}`);
      await prisma.product.create({ data: product });
    } else {
      console.log(`Product already exists: ${product.title}`);
    }
  }
  console.log("Demo products processed successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
