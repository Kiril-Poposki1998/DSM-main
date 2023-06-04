FROM node:20.2.0-alpine

WORKDIR /app

COPY . /app/

RUN yarn install

RUN yarn build

CMD ["yarn","dev"]

