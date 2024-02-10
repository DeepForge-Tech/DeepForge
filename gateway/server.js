const gateway = require("fast-gateway")

const server = gateway({
	routes: [
		{
			prefix: "/users",
			target: "http://localhost:3001"
		},
		{
			prefix: "/posts",
			target: "http://localhost:3002"
		}
	]
})

server.get("/serverApi", function (request, result) {
	result.send("Server API is called.")
})

server.start(80).then(function () {
	console.log("Server is started running.")
})