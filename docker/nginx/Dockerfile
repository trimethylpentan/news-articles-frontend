FROM node:17-bullseye AS node

COPY --chown=node:node . /app
WORKDIR /app
USER node

# Workaround für einen webpack Bug mit der aktuellen node-Version (https://github.com/webpack/webpack/issues/14532)
ENV NODE_OPTIONS=--openssl-legacy-provider

# Die Base-Url als Argument aus der docker-compose.yml auslesen und als ENV setzen, damit sie in der App als env-Variable zur Verfügung steht
ARG base_url
ENV REACT_APP_BACKEND_BASE_URL=$base_url

# Abhhängigkeiten installieren und das Projekt builden
RUN npm install
RUN npm run build

FROM nginx:1.20
# Die build-Files aus dem node-Container kopieren. Diese können einfach als statische Dateien von nginx ausgegeben werden
COPY --chown=www-data:www-data --from=node /app/build /usr/share/nginx/html
