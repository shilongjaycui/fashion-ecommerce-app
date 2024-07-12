build-server:
	pip install --upgrade pip
	pip install -r requirements.txt

lint-server:
	flake8 .

test-server:
	pytest

run-server:
	export FLASK_APP=server.py && flask run --port=4242

containerize-server:
	docker build -t containerized-backend .

run-containerized-server:
	docker run -p 4242:4242 containerized-backend