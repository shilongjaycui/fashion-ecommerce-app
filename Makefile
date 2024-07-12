build-server:
	pip install --upgrade pip
	pip install -r requirements.txt

lint-server:
	pip install flake8
	flake8 server.py

run-server:
	export FLASK_APP=server.py && flask run --port=4242

build-client:
	npm install

run-client:
	npm start