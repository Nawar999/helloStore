-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "old_price" REAL,
    "current_price" REAL NOT NULL,
    "catogry" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "timeInMonth" INTEGER NOT NULL
);
