import app from "./app"
import { prisma } from "./lib/prisma"

async function main (){
    const port = process.env.PORT || 3000
    try{
      await prisma.$connect()
      console.log("connected to the database successfully")

      app.listen(port , ()=> {
        console.log(`server is running on ${port}`)
      })

    } catch (error){
        console.log("An error occurred", error)
        await prisma.$disconnect();
        process.exit(1);
    }
}

main()