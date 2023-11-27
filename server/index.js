import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"123456duy",
        database:"SMSD"

    }
)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello this is a backend")
})

app.get("/student", (req, res) => {
    const q = "CALL get_all_students()"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data[0])
    })
})

app.get("/lecturer", (req, res) => {
    const q = "CALL get_all_lecturers()"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data[0])
    })
})

app.listen(8800,() => 
    console.log("Connected to backend2")
)