import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"123456duy",
        database:"smdb",

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

app.post("/student", (req,res) =>{
    const q = "CALL add_new_student(?)";
    const values = [
        req.body.student_id,
        req.body.student_name,
        req.body.student_class,
        req.body.address,
        req.body.mail_address,
        req.body.phone_number,
        req.body.major_id,
        req.body.advisor_id,
        req.body.student_type,
        req.body.no_credits,
        req.body.certificate,
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Student has been added successfully")
    });
});

app.delete("/student/:student_id", (req, res) => {
    const student_id = req.params.student_id
    const q = "CALL delete_student(?)"
    db.query(q, [student_id], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book has been removed successfully.")
    })
})

app.put("/student/:student_id", (req, res) => {
    const values = [
        req.body.student_id,
        req.body.student_name,
        req.body.student_class,
        req.body.address,
        req.body.mail_address,
        req.body.phone_number,
        req.body.major_id,
        req.body.advisor_id,
        req.body.student_type,
        req.body.no_credits,
        req.body.certificate,
    ]
    const q = "CALL update_student(?)"
    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book has been updated successfully.")
    })
})


app.get("/lecturer", (req, res) => {
    const q = "CALL get_all_lecturers()"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data[0])
    })
})

app.post("/lecturer", (req,res) =>{
    const q = "CALL add_new_lecturer(?)";
    const values = [
        req.body.lecturer_id,
        req.body.lecturer_name,
        req.body.dob,
        req.body.address,
        req.body.mail_address,
        req.body.phone_number,
        req.body.speciality,
        req.body.department_id,
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Lecturer has been added successfully")
    });
});

app.delete("/lecturer/:lecturer_id", (req, res) => {
    const lecturer_id = req.params.lecturer_id
    const q = "CALL delete_lecturer(?)"
    db.query(q, [lecturer_id], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book has been removed successfully.")
    })
})

app.get("/department", (req, res) => {
    const q = "CALL get_all_departments()"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data[0])
    })
})

app.post("/department", (req,res) =>{
    const q = "CALL add_new_department(?)";
    const values = [
        req.body.department_id,
        req.body.department_name,
        req.body.buiding,
        req.body.phone_number,
        req.body.mail_address,
        req.body.head_lecturer,
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Department has been added successfully")
    });
});

app.delete("/department/:department_id", (req, res) => {
    const department_id = req.params.department_id
    const q = "CALL delete_department(?)"
    db.query(q, [department_id], (err,data) => {
        if(err) return res.json(err)
        return res.json("Department has been removed successfully.")
    })
})

app.listen(8800,() => 
    console.log("Connected to backend2")
)