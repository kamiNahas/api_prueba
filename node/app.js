import express from "express"
import cors from "cors"
//importamos la conexion red
import db from "./database/db.js"
//importamos nuestro enrutador 
import blogRoutes from "./routes/routes.js"



app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log('El error de la conexion es: ${error}')

    
}

app.get('/', (req, res)=>{
    res.send('HOLIS')
})

app.listen(8000) ,()=>{
    console.log('server UP running in http://localhost:8000/')
}