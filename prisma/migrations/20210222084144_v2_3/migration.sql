-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `address_ibfk_1`;

-- DropForeignKey
ALTER TABLE `price` DROP FOREIGN KEY `price_ibfk_1`;

-- DropForeignKey
ALTER TABLE `price` DROP FOREIGN KEY `price_ibfk_2`;

-- AlterTable
ALTER TABLE `user` MODIFY `phoneNumber` VARCHAR(191);

-- AddForeignKey
ALTER TABLE `Address` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Price` ADD FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Price` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
