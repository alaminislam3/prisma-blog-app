import express, {Application} from "express"

const app: Application = express()

app.get ('/', (req,res)=> {
    res.send("welcome to the postgres server with prisma ")
})

export default app