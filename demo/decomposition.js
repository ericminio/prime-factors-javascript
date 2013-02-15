var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote({desiredCapabilities:{browserName:"chrome"}});

client
    .testMode()
    .init()
    .url("http://localhost:5000/index.html")
	.setValue("#number", "300")
	.click("#decompose")
	.pause(2000)
	.doubleClick("#number")
	.setValue("#number", "15000")
	.click("#decompose")
	.pause(2000)
    .end();