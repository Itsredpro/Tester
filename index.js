const app = require("express")()

app.get("/",(req,res)=>{
    res.send("lol")
})

app.listen(3000)