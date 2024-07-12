build-server:
	pip install --upgrade pip
	pip install -r requirements.txt

lint-server:
	flake8 .

test-server:
	pytest

run-server:
	export FLASK_APP=server.py && flask run --port=4242

build-client:
	npm install

lint-client:
	npm install eslint
	npx eslint src/**/*.tsx

run-client:
	npm start