-- CreateTable
CREATE TABLE `recipes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `strName` VARCHAR(191) NOT NULL,
    `categorieId` INTEGER NOT NULL,
    `recipeType` VARCHAR(191) NOT NULL,
    `strAlcoholic` VARCHAR(191) NOT NULL,
    `strGlass` VARCHAR(191) NOT NULL,
    `strArea` VARCHAR(191) NOT NULL,
    `strInstructions` TEXT NOT NULL,
    `strThumb` VARCHAR(191) NOT NULL,
    `strTags` VARCHAR(191) NOT NULL,
    `strYoutube` VARCHAR(191) NOT NULL,
    `str_ingredient1` VARCHAR(191) NOT NULL,
    `str_ingredient2` VARCHAR(191) NOT NULL,
    `str_ingredient3` VARCHAR(191) NOT NULL,
    `str_ingredient4` VARCHAR(191) NOT NULL,
    `str_ingredient5` VARCHAR(191) NOT NULL,
    `str_ingredient6` VARCHAR(191) NOT NULL,
    `str_ingredient7` VARCHAR(191) NOT NULL,
    `str_ingredient8` VARCHAR(191) NOT NULL,
    `str_ingredient9` VARCHAR(191) NOT NULL,
    `str_ingredient10` VARCHAR(191) NOT NULL,
    `str_ingredient11` VARCHAR(191) NOT NULL,
    `str_ingredient12` VARCHAR(191) NOT NULL,
    `str_ingredient13` VARCHAR(191) NOT NULL,
    `str_ingredient14` VARCHAR(191) NOT NULL,
    `str_ingredient15` VARCHAR(191) NOT NULL,
    `str_ingredient16` VARCHAR(191) NOT NULL,
    `str_ingredient17` VARCHAR(191) NOT NULL,
    `str_ingredient18` VARCHAR(191) NOT NULL,
    `str_ingredient19` VARCHAR(191) NOT NULL,
    `str_ingredient20` VARCHAR(191) NOT NULL,
    `str_measure1` VARCHAR(191) NOT NULL,
    `str_measure2` VARCHAR(191) NOT NULL,
    `str_measure3` VARCHAR(191) NOT NULL,
    `str_measure4` VARCHAR(191) NOT NULL,
    `str_measure5` VARCHAR(191) NOT NULL,
    `str_measure6` VARCHAR(191) NOT NULL,
    `str_measure7` VARCHAR(191) NOT NULL,
    `str_measure8` VARCHAR(191) NOT NULL,
    `str_measure9` VARCHAR(191) NOT NULL,
    `str_measure10` VARCHAR(191) NOT NULL,
    `str_measure11` VARCHAR(191) NOT NULL,
    `str_measure12` VARCHAR(191) NOT NULL,
    `str_measure13` VARCHAR(191) NOT NULL,
    `str_measure14` VARCHAR(191) NOT NULL,
    `str_measure15` VARCHAR(191) NOT NULL,
    `str_measure16` VARCHAR(191) NOT NULL,
    `str_measure17` VARCHAR(191) NOT NULL,
    `str_measure18` VARCHAR(191) NOT NULL,
    `str_measure19` VARCHAR(191) NOT NULL,
    `str_measure20` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `recipes` ADD CONSTRAINT `recipes_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
