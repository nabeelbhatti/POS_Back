-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('PHYSICAL', 'SERVICE', 'DYNAMIC', 'CONSUMABLE');

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productPrice" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "productType" "ProductType" NOT NULL DEFAULT E'PHYSICAL',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
