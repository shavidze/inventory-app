build:
	@echo "Building Docker image..."
	docker build -t server .

run:
	@echo "Running application with Docker Compose..."
	docker-compose up

stop:
	@echo "Stopping and removing running containers..."
	docker-compose down

migrate:
	@echo "Running database migrations..."
	npm run migrate

rollback:
	@echo "Rolling back database migrations..."
	npm run rollback

seed:
	@echo "Seeding the database..."
	npm run seed

status:
	@echo "Getting the status of database migrations..."
	npm run status

start:
	@echo "Starting the application (without Docker)..."
	npm start

test:
	@echo "Running tests..."
	npm test
