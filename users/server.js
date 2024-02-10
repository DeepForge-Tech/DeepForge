const express = require("express")
const app = express()

app.get("/getData", function (request, result) {
	result.send("Get data from users.")
})

app.listen(3001, function () {
	console.log("User service is running.")
})