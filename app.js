var express = require("express")
var app = express()

app.set("port", 4000)

app.get("/", function(req, res) {
  res.send("sample docker image of trustsaude")
})

app.listen(app.get("port"), function() {
  console.log("node running on port " +  app.get("port"))
})
