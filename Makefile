build-server:
	pip install --upgrade pip
	pip install -r requirements.txt

run-server:
	export FLASK_APP=server.py && flask run --port=4242

build-client:
	npm install

run-client:
	npm start

open-web-app:
	open "http://localhost:3000/checkout"