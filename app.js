var express = require("express")
var app = express()

app.set("port", 3000)

app.listen(app.get("port"), function() {
  res.send("sample docker image of trustsaude")
  console.log("node running on port " +  app.get("port"))
})
