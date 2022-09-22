const http = require("http")
const port = 3000;

const app = http.createServer((req,res) =>{
    res.write("<h1>heroku</h1>")
    res.write("<h1>heroku</h1>")
    res.end()

})

app.listen(port)