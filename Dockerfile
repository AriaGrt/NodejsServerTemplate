FROM node:latest

WORKDIR app

ADD package.json .
ADD config/tsconfig.json .
ADD config/tslint.json .
ADD config/nodemon.config.json .

RUN npm install

RUN npm install -g nodemon