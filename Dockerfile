FROM node:4.2.2

ADD . sample-docker-image
WORKDIR sample-docker-image

RUN npm install

CMD ["node", "app.js"]
