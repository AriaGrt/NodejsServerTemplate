FROM node:latest

WORKDIR app

ADD package.json .
ADD tsconfig.json .
ADD tslint.json .

RUN npm install

RUN npm install -g nodemon