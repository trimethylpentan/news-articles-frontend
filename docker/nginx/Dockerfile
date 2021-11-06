FROM node:17-bullseye AS node
# Node 17 ist inkompatibel mit der aktuellen webpack-version (https://github.com/webpack/webpack/issues/14532)

COPY --chown=node:node . /app
WORKDIR /app
USER node

 # Workaround für einen webpack Bug mit der aktuellen node-Version (https://github.com/webpack/webpack/issues/14532)
ENV NODE_OPTIONS=--openssl-legacy-provider
ARG base_url
ENV REACT_APP_BACKEND_BASE_URL=$base_url
RUN npm install
RUN npm run build

FROM nginx:1.20
COPY --chown=www-data:www-data --from=node /app/build /usr/share/nginx/html
