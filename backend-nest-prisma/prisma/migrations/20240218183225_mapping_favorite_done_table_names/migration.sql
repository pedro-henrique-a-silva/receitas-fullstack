/*
  Warnings:

  - The primary key for the `dones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recipeId` on the `dones` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `dones` table. All the data in the column will be lost.
  - The primary key for the `favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recipeId` on the `favorite` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `favorite` table. All the data in the column will be lost.
  - Added the required column `recipe_id` to the `dones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `dones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipe_id` to the `favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dones` DROP FOREIGN KEY `dones_recipeId_fkey`;

-- DropForeignKey
ALTER TABLE `dones` DROP FOREIGN KEY `dones_userId_fkey`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `favorite_recipeId_fkey`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `favorite_userId_fkey`;

-- AlterTable
ALTER TABLE `dones` DROP PRIMARY KEY,
    DROP COLUMN `recipeId`,
    DROP COLUMN `userId`,
    ADD COLUMN `recipe_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `recipe_id`);

-- AlterTable
ALTER TABLE `favorite` DROP PRIMARY KEY,
    DROP COLUMN `recipeId`,
    DROP COLUMN `userId`,
    ADD COLUMN `recipe_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `recipe_id`);

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dones` ADD CONSTRAINT `dones_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dones` ADD CONSTRAINT `dones_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
