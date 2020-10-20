# Bootstrap Server

A HTTP server serving basic bootstrap data as JSON object. NodeJS services can process the bootstrap data with the [bootstrap client](https://github.com/artcom/bootstrap-client).

## Local Usage

```bash
npm install --global bunyan
npm install

export BACKEND_HOST=<backendHost>
export HTTP_BROKER_URI=<httpBrokerUri>
export TCP_BROKER_URI=<tcpBrokerUri>
export WS_BROKER_URI=<wsBrokerUri>
export CONFIG_SERVER_URI=<configServerUri>
export TOUR_ADMINISTRATOR_API_URI=<tourAdministratorApiUri>
export STORAGE_SERVER_URI=<storageServerUri>
npm start | bunyan
```

The bootstrap data can now be queried at `http://localhost:3000/<device>`.

## Bootstrap Data

The bootstrap data is structured as follows:

```typescript
{
  backendHost: string,
  httpBrokerUri: string,
  tcpBrokerUri: string,
  wsBrokerUri: string,
  configServerUri: string,
  tourAdministratorApiUri: string,
  storageServerUri: string,
  deviceTopic: string,
  device: string
}
```

**Note:** Properties which are not exported as environment variables are omitted from the bootstrap data.

## Deployment

The service can be deployed with Dokku.
