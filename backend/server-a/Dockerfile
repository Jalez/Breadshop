# This is where you define the image for
# the server A, which implements the Swagger API.

# Start by copying the server stub to this directory.

# You should then use Node 10 image from Docker Hub as the basis,
# and then follow the instructions linked to in assignment document.
# You should be able to produce a working installation by just
# following the instructions.

# First line is provided for your convenience.
# This line fetches the Node Docker image with tag "10"
# from Docker Hub.
FROM node:10
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# t
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
