import { expect } from "chai";
import { ConsoleLoggerFactory, LogLevels } from "hippo/infrastructure/logging";

class Foo {}

describe("Console Logger Factory", () => {

  it("should write to log", () => {
    var loggerFactory = new ConsoleLoggerFactory(LogLevels.DEBUG);
    var logger = loggerFactory.createLogger("Spec");
    logger.logDebug("Application started [application=hippo]");
    logger.logInformation("Application started [application=hippo]");
    logger.logWarning("Not found [username=bob, application=hippo]");
    logger.logError("An error has occured [username=bob, application=hippo]");
    logger.logCritical("A critical error has occured [username=bob, application=hippo]");
    expect(logger).to.be.not.null;
  });

  it("should create logger with class name", () => {
    var loggerFactory = new ConsoleLoggerFactory();
    var logger = loggerFactory.createLogger(Foo);
    expect(logger.name).to.be.equal("Foo");
  });

});