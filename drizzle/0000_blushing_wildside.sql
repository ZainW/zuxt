-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `auth_key` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`hashed_password` varchar(191),
	`user_id` varchar(191) NOT NULL,
	`primary_key` tinyint NOT NULL,
	`expires` bigint);

CREATE TABLE `auth_session` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`user_id` varchar(191) NOT NULL,
	`active_expires` bigint NOT NULL,
	`idle_expires` bigint NOT NULL);

CREATE TABLE `auth_user` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`avatar` text,
	`email` varchar(191) NOT NULL,
	`name` varchar(191),
	`role` enum('ADMIN','USER') NOT NULL DEFAULT 'USER');

CREATE UNIQUE INDEX `auth_key_id_key` ON `auth_key` (`id`);
CREATE INDEX `auth_key_user_id_idx` ON `auth_key` (`user_id`);
CREATE UNIQUE INDEX `auth_session_id_key` ON `auth_session` (`id`);
CREATE INDEX `auth_session_user_id_idx` ON `auth_session` (`user_id`);
CREATE UNIQUE INDEX `auth_user_email_key` ON `auth_user` (`email`);
CREATE UNIQUE INDEX `auth_user_id_key` ON `auth_user` (`id`);
*/
