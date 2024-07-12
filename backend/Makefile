build-server:
	pip install --upgrade pip
	pip install -r requirements.txt

lint-server:
	flake8 .

test-server:
	pytest

run-server-locally:
	export FLASK_APP=server.py && export STATIC_FOLDER=../frontend/public && flask run --port=4242

containerize-server:
	docker build -t containerized-backend .

run-containerized-server:
	docker run -p 4242:4242 containerized-backend