/*
  Warnings:

  - The primary key for the `dones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recipeId` on the `dones` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `dones` table. All the data in the column will be lost.
  - The primary key for the `favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recipeId` on the `favorite` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `favorite` table. All the data in the column will be lost.
  - You are about to drop the column `categorieId` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient1` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient10` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient11` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient12` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient13` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient14` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient15` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient16` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient17` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient18` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient19` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient2` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient20` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient3` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient4` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient5` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient6` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient7` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient8` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_ingredient9` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure1` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure10` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure11` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure12` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure13` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure14` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure15` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure16` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure17` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure18` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure19` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure2` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure20` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure3` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure4` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure5` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure6` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure7` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure8` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `str_measure9` on the `recipes` table. All the data in the column will be lost.
  - Added the required column `recipe_id` to the `dones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `dones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipe_id` to the `favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dones` DROP FOREIGN KEY `dones_recipeId_fkey`;

-- DropForeignKey
ALTER TABLE `dones` DROP FOREIGN KEY `dones_userId_fkey`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `favorite_recipeId_fkey`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `favorite_userId_fkey`;

-- DropForeignKey
ALTER TABLE `recipes` DROP FOREIGN KEY `recipes_categorieId_fkey`;

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

-- AlterTable
ALTER TABLE `recipes` DROP COLUMN `categorieId`,
    DROP COLUMN `str_ingredient1`,
    DROP COLUMN `str_ingredient10`,
    DROP COLUMN `str_ingredient11`,
    DROP COLUMN `str_ingredient12`,
    DROP COLUMN `str_ingredient13`,
    DROP COLUMN `str_ingredient14`,
    DROP COLUMN `str_ingredient15`,
    DROP COLUMN `str_ingredient16`,
    DROP COLUMN `str_ingredient17`,
    DROP COLUMN `str_ingredient18`,
    DROP COLUMN `str_ingredient19`,
    DROP COLUMN `str_ingredient2`,
    DROP COLUMN `str_ingredient20`,
    DROP COLUMN `str_ingredient3`,
    DROP COLUMN `str_ingredient4`,
    DROP COLUMN `str_ingredient5`,
    DROP COLUMN `str_ingredient6`,
    DROP COLUMN `str_ingredient7`,
    DROP COLUMN `str_ingredient8`,
    DROP COLUMN `str_ingredient9`,
    DROP COLUMN `str_measure1`,
    DROP COLUMN `str_measure10`,
    DROP COLUMN `str_measure11`,
    DROP COLUMN `str_measure12`,
    DROP COLUMN `str_measure13`,
    DROP COLUMN `str_measure14`,
    DROP COLUMN `str_measure15`,
    DROP COLUMN `str_measure16`,
    DROP COLUMN `str_measure17`,
    DROP COLUMN `str_measure18`,
    DROP COLUMN `str_measure19`,
    DROP COLUMN `str_measure2`,
    DROP COLUMN `str_measure20`,
    DROP COLUMN `str_measure3`,
    DROP COLUMN `str_measure4`,
    DROP COLUMN `str_measure5`,
    DROP COLUMN `str_measure6`,
    DROP COLUMN `str_measure7`,
    DROP COLUMN `str_measure8`,
    DROP COLUMN `str_measure9`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    MODIFY `strAlcoholic` VARCHAR(191) NULL,
    MODIFY `strGlass` VARCHAR(191) NULL,
    MODIFY `strArea` VARCHAR(191) NULL,
    MODIFY `strTags` VARCHAR(191) NULL,
    MODIFY `strYoutube` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ingredients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ingredient` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `measure` VARCHAR(191) NULL,
    `recipe_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ingredients` ADD CONSTRAINT `ingredients_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recipes` ADD CONSTRAINT `recipes_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorite` ADD CONSTRAINT `favorite_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dones` ADD CONSTRAINT `dones_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dones` ADD CONSTRAINT `dones_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
