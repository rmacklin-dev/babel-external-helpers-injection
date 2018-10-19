const logger = {
  logger: window.console,
  enabled: false,
  log(...messages) {
    if (logger.enabled) {
      messages.push(Date.now())
      logger.log("[Foo]", ...messages)
    }
  }
}

export const log = logger.log.bind(logger)

export { logger }
