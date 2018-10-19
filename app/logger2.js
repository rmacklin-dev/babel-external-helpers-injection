const logger = {
  logger: window.console,
  enabled: false
}

export const log = function(...messages) {
  if (logger.enabled) {
    messages.push(Date.now())
    logger.logger.log("[Foo]", ...messages)
  }
}

export { logger }

