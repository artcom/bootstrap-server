import * as express from "express"
import * as cors from "cors"
import * as Logger from "bunyan"

const PORT = process.env.PORT || 3000

const BOOTSTRAP_DATA = {
  backendHost: process.env.BACKEND_HOST,
  httpBrokerUri: process.env.HTTP_BROKER_URI,
  tcpBrokerUri: process.env.TCP_BROKER_URI,
  wsBrokerUri: process.env.WS_BROKER_URI,
  configServerUri: process.env.CONFIG_SERVER_URI,
  tourAdministratorApiUri: process.env.TOUR_ADMINISTRATOR_API_URI,
  storageServerUri: process.env.STORAGE_SERVER_URI
}

const logger = Logger.createLogger({
  name: "bootstrapServer",
  level: "debug",
  serializers: { error: Logger.stdSerializers.err }
})

function bootstrap(request: express.Request, response: express.Response) {
  const device = request.params.device

  logger.info({ device, ip: request.ip }, "Returning bootstrap data")

  response.json({
    ...BOOTSTRAP_DATA,
    deviceTopic: `devices/${device}`,
    device
  })
}

const app = express()
app.use(cors())
app.set("trust proxy", true)
app.get("/:device", bootstrap)

app.listen(PORT, () => {
  logger.info({ port: PORT, bootstrapData: BOOTSTRAP_DATA }, "Bootstrap Server up and running")
})
