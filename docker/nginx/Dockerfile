FROM node:17-bullseye AS node

COPY --chown=node:node . /app
WORKDIR /app
USER node

RUN npm install
RUN npm run build

FROM nginx:1.20
COPY --chown=www-data:www-data --from=node /app /var/www/html