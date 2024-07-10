const winston = require("winston");

function testLogger() {
  return winston.createLogger({
    level: "info",
    format: winston.format.json(),
    // defaultMeta: { service: "user-service" },
    transports: [new winston.transports.Console()],
  });
}
module.exports = testLogger;
