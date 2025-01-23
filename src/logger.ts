import pino from "pino";
import "dotenv/config";

const pinoConfig = pino({
  level: process.env.PINO_LOG_LEVEL ?? "info",
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

type Layer = "service" | "repository" | "handler";

export type LoggerContext = {
  requestId: string;
  operationId: string;
  userId: string | undefined;
};

export function logger(
  level: pino.Level,
  msg: string,
  layer: Layer,
  context: LoggerContext | undefined,
) {
  if (context) {
    pinoConfig[level]({ layer, msg, context });
  } else {
    pinoConfig[level]({ layer, msg });
  }
}
