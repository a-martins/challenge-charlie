FROM node:18.20-alpine3.20

WORKDIR /usr/src/weather-client

RUN chown -Rh node:node /usr/src/weather-client

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

EXPOSE 8080

CMD ["sh", "-c", "npm install && npm run dev"]
