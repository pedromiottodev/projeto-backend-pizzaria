/*
  Warnings:

  - You are about to drop the column `nome` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."orders" DROP COLUMN "nome",
ADD COLUMN     "name" TEXT;
