build-client:
	npm install

lint-client:
	npm install eslint
	npx eslint src/**/*.tsx

run-client-locally:
	npm start

containerize-client:
	docker build -t containerized-frontend .

run-containerized-client:
	docker run -p 3000:3000 containerized-frontend