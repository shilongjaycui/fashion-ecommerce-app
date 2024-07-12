# Use the official Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy and install requirements
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set environment variable for Flask
ENV FLASK_APP=server.py

# Define a build-time variable for the Stripe API key
ARG STRIPE_API_KEY

# Set the Stripe API key environment variable from the build argument
ENV STRIPE_API_KEY=${STRIPE_API_KEY}

# Set the static folder environment variable for Docker
ENV STATIC_FOLDER=/app/static

# Create a directory for static files
RUN mkdir -p /app/static

# Specify the command to run the server
CMD ["flask", "run", "--host=0.0.0.0", "--port=4242"]