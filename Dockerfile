FROM node:13.12.0-alpine

RUN mkdir -p /src/qa

WORKDIR /src/qa

COPY . /src/qa

RUN npm install

EXPOSE 3003

CMD [ "npm", "start" ]