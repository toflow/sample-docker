FROM trustsaude/sample-docker-image

ADD . sample-docker-image
WORKDIR sample-docker-image

RUN npm install

CMD ["node", "app.js"]
