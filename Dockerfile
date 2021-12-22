FROM node:14.17.0-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm ci && npm run build

COPY . ./

CMD [ "npm", "start" ]

EXPOSE 8080