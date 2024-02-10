const db = require("./Database")
const express = require("express")
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

app.post("/add_log", async function (req, res) {
    if (req.body)
    {
        var data = {
            "architecture":req.body["architecture"],
            "os_name":req.body["os_name"],
            "log_text":req.body["log_text"],
        }
        if (req.body["channel"])
        {
            await data.push({
                key:   "channel",
                value: req.body["channel"]
            });
        }
        if(req.body["function_name"])
        {
            await data.push({
                key:   "function_name",
                value: req.body["function_name"]
            });
        }
        var result = await db.InsertToDatabase("logs",data);
        res.sendStatus(result);
    }
	
})

app.listen(process.env.PORT || 5001, async function () {
	console.log("Database service is running.")
})