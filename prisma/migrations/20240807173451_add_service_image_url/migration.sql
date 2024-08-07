/*
  Warnings:

  - Added the required column `imageUrl` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- Adicionar a coluna com um valor padrão temporário
ALTER TABLE "Service" ADD COLUMN "imageUrl" TEXT DEFAULT '' NOT NULL;

-- Opcional: Atualizar os valores da coluna para linhas existentes
UPDATE "Service" SET "imageUrl" = 'default_image_url' WHERE "imageUrl" IS NULL;

-- Remover o valor padrão
ALTER TABLE "Service" ALTER COLUMN "imageUrl" DROP DEFAULT;

