const express = require('express')
const app = express()
app.listen(3000, () =>{
console.log("App listening on port 3000")
})

app.get("/", (req, res)=>{
    
    restart.send("<h1>hello</h1>")
})