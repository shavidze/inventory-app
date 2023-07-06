# Inventory-App
Organize and track belongings effortlessly with this user-friendly home inventory app. Capture item details, photos, and values for easy organization, insurance records, and maintenance tracking.

## Server Setup
 - Create `.env` file like `.env.sample`
 - Run `docker-compose up` to start the db and adminer
 - Install dependencies: `cd server && npm i`
 - Migrate the database: `npm run migrate`
 - Rollback the database: `npm run rollback`
 - Check the status of database: `npm run status`