const express = require("express")
const app = express()

app.get("/getData", function (request, result) {
	result.send("Get data from posts.")
})

app.listen(3002, function () {
	console.log("Post service is running.")
})