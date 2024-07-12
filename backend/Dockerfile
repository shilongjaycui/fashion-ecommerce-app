# Use Debian as base image
FROM debian:bullseye-slim

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libncurses5-dev \
    libncursesw5-dev \
    libreadline-dev \
    libsqlite3-dev \
    libgdbm-dev \
    libdb5.3-dev \
    libbz2-dev \
    libexpat1-dev \
    liblzma-dev \
    tk-dev \
    wget \
    make \
    && rm -rf /var/lib/apt/lists/*

# Download and install Python 3.11 from source
RUN wget https://www.python.org/ftp/python/3.11.2/Python-3.11.2.tgz \
    && tar -xf Python-3.11.2.tgz \
    && cd Python-3.11.2 \
    && ./configure \
    && make \
    && make install \
    && cd .. \
    && rm -rf Python-3.11.2* \
    && apt-get purge -y --auto-remove \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libncurses5-dev \
    libncursesw5-dev \
    libreadline-dev \
    libsqlite3-dev \
    libgdbm-dev \
    libdb5.3-dev \
    libbz2-dev \
    libexpat1-dev \
    liblzma-dev \
    tk-dev \
    wget

# Set Python 3 as default
RUN ln -sf /usr/local/bin/python3.11 /usr/bin/python

# Install pip for Python 3.11 using curl
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \
    && python3.11 get-pip.py \
    && rm get-pip.py

# Set working directory
WORKDIR /app

# Copy and install requirements
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Specify the command to run the server
CMD ["export", "FLASK_APP=server.py", "&&", "flask", "run", "--port=4242"]