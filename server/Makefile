# Build the Docker image
build:
    npm run migrate
    docker build -t server .

# Run the application with Docker Compose
run:
    docker-compose up -d

# Stop and remove the running containers
stop:
    docker-compose down

# Run database migrations
migrate:
    npm run migrate

# Rollback database migrations
rollback:
    npm run rollback

# Seed the database
seed:
    npm run seed

# Get the status of database migrations
status:
    npm run status

# Start the application (without Docker)
start:
    npm start

# Run tests
test:
    npm test
