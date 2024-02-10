const gateway = require("fast-gateway")

const server = gateway({
	routes: [
		{
			prefix: "/api",
			target: "http://localhost:" + (process.env.DB_SERVICE_PORT || 5001)
		}
		// {
		// 	prefix: "/posts",
		// 	target: "http://localhost:3002"
		// }
	]
})

server.get("/",async function (req, res) {
	res.send("Server API is called.")
})

server.start(process.env.PORT || 80).then(async function () {
	console.log("Server is started running.")
})