# Bootstrap Server

A HTTP server serving basic bootstrap data as JSON object. NodeJS services can process the bootstrap data with the [bootstrap client](https://github.com/artcom/bootstrap-server).

## Local Usage

```bash
npm install --global bunyan
npm install

export BACKEND_HOST=<backendHost>
export HTTP_BROKER_URI=<httpBrokerUri>
export TCP_BROKER_URI=<tcpBrokerUri>
export WS_BROKER_URI=<wsBrokerUri>
export CONFIG_SERVER_URI=<configServerUri>
npm start | bunyan
```

The bootstrap data can now be queried at `http://localhost:3000/<device>`.

## Deployment

The service can be deployed with Dokku.
