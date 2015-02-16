describe('Unit: LoggerProvider', function () {
    beforeEach(module('angular-cc-logger'));

    /**
     *  @type {LoggerProvider}
     */
    var loggerProvider;
    beforeEach(inject(function (_LoggerProvider_) {
        loggerProvider = _LoggerProvider_;
    }));

    it('should be defined', shouldBeDefined);
    it('should push handler into array', shouldPushHandlerIntoArray);

    function shouldBeDefined() {
        expect(loggerProvider).toBeDefined();
        expect(handler).toBeDefined();
    }


    function shouldPushHandlerIntoArray() {
        var level = 10;
        var message = "test";

        var handler = new Handler;

        handler.setHandler(message, level);

        expect(handler.getHandler().toBe({"level":10,"message":"test"}));

        loggerProvider.pushHandler(handler);

        expect(loggerProvider.handlers.length).toBe(1);
    }
});