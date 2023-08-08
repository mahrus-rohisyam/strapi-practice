CREATE DATABASE IF NOT EXISTS `strapi-cms`;
CREATE USER IF NOT EXISTS 'strapi-cms'@'localhost' IDENTIFIED WITH mysql_native_password BY 'STRAPI_CMS#2023';
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'strapi-cms'@'localhost' WITH GRANT OPTION;