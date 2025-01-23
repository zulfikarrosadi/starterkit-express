/*
  Warnings:

  - You are about to drop the column `lastLogin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `lastLogin`,
    ADD COLUMN `last_authenticated` DATETIME(3) NULL;
