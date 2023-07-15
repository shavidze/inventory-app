# Inventory-App
Organize and track belongings effortlessly with this user-friendly home inventory app. Capture item details, photos, and values for easy organization, insurance records, and maintenance tracking.

### Prerequisities
 - Docker should be installed on your machine
## Server Setup

 - Create `.env` file like `.env.sample`
 - Run the following command to build the `Docker` image and perform database migataions
   ```shell
	  make build
	```
 - To __start__ the application:
 	```shell
	  make run
	```
 - To __stop__ the application:
    ```shell
	  make stop
	```

## Other Makefile Commands

- [x] `make migrate`: Run database migrations.
- [x] `make rollback`: Rollback the most recent database migration.
- [x] `make seed`: Seed the database with initial data.
- [x] `make status`: Get the status of database migrations.
- [x] `make start`: Start the application without using Docker.
- [x] `make test`: Run tests for the application.
