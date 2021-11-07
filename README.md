# Heise-Bewerbungsaufgaben Teil 1: News-Artikel-Webservice (Frontend)

## Beschreibung und Codestruktur
Das Frontend des News-Artikel-Service ist eine React-Applikation.
Zur statischen Typenprüfung wird die Bibliothek `flow` und als CSS-Framework `bootstrap` verwendet.

Der Code befindet sich im `src`-Verzeichnis. Dieses ist folgendermaßen gegliedert:
Direkt in diesem Verzeichnis befindet sich der Einstiegspunkt in der `index.js` und die "Routen".

Die Routen der Applikation sind in der `AppRouter.js` konfiguriert.

Unter `components` befinden sich wiederverwendbare React-Komponenten, die von den Routen eingebunden werden.

## Einrichten der Entwicklungsumgebung
Das Programm kann zur lokalen Entwicklung über den npm development Server gestartet werden.
Dazu wird eine aktuelle node-Version benötigt.

```bash
npm install
REACT_APP_BACKEND_BASE_URL="http://localhost:8080" npm run start
```

Wird node 17 benutzt, sollte aktuell aufgrund einer Inkompatibilität zwischen Webpack und node vorher eine ENV-Variable gesetzt werden:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Alternativ steht auch ein [docker-build](#projekt-builden) zur Verfügung, der das Starten des Projektes erleichtert.

## Projekt builden
Das Frontend kann über docker gebuildet werden. Dafür wird ein Production-Build des Projektes mit node erstellt, welches dann
über einen nginx-Container erreichbar ist. Dazu muss lediglich folgender Befehl ausgeführt werden:
`docker-compose up`

Anschließend kann das Frontend über `http://localhost:8082` aufgerufen werden.
