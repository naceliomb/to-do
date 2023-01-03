const Express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");
const PORT = process.env.PORT || 3000;

const app = Express();

app.use(cors());
app.use(Express.json());

app.get("/", (req,res)=>{
    res.send("welcome");
})

app.use("/api", todoRouter);

app.use((req, res) => {
    res.status(404)
})


app.listen(PORT, ()=>{
    console.log(`Server ON Running at http://localhost:${PORT}/`);
})