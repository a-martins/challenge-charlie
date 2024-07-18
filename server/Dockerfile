FROM node:16.20-alpine3.18

WORKDIR /usr/src/weather-server

RUN chown -Rh node:node /usr/src/weather-server

RUN rm -rf node_modules
RUN rm -rf package-lock.json

COPY package*.json ./

RUN apk update && \
    apk add ca-certificates wget npm curl && \
    update-ca-certificates && \
    npm install -g dotenv-cli

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["sh", "-c", "npm install && npm run dev"]
