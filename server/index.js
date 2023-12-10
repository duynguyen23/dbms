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
        return res.json("Student has been removed successfully.")
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
        return res.json("Student has been updated successfully.")
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
        return res.json("Lecturer has been removed successfully.")
    })
})

app.put("/lecturer/:lecturer_id", (req, res) => {
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
    const q = "CALL update_lecturer(?)"
    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Lecturer has been updated successfully.")
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

app.put("/department/:department_id", (req, res) => {
    const values = [
        req.body.department_id,
        req.body.department_name,
        req.body.building,
        req.body.phone_number,
        req.body.mail_address,
        req.body.head_lecturer,
    ]
    const q = "CALL update_department(?)"
    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Department has been updated successfully.")
    })
})


app.get("/course", (req, res) => {
    const q = "CALL get_all_courses()"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data[0])
    })
})

app.post("/course", (req,res) =>{
    const q = "CALL add_new_course(?)";
    const values = [
        req.body.course_id,
        req.body.course_name,
        req.body.credits,
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Course has been added successfully")
    });
});

app.delete("/course/:course_id", (req, res) => {
    const course_id = req.params.course_id
    const q = "CALL delete_course(?)"
    db.query(q, [course_id], (err,data) => {
        if(err) return res.json(err)
        return res.json("Course has been removed successfully.")
    })
})

app.get("/student/:student_id", (req, res) =>{
    const student_id = req.params.student_id
    const q = "CALL get_student_by_id(?)"
    db.query(q, [student_id], (err,data) => {
        if(err) return res.json(err)
        return res.json(data[0][0])
    })
}
);

app.get("/register/:semester_id/:student_id",  (req, res ) => {
    const value = [req.params.student_id, req.params.semester_id]
    const q = "CALL get_register_by_student(?)"
    db.query(q, [value], (err, data) =>{
        if (err) return res.json(err)
        return res.json(data[0])
    })
})

app.post("/register",  (req, res ) => {
    const q = "CALL add_register(?)"
    const value = [req.body.student_id, req.body.course_id, req.body.semester_id]
    db.query(q, [value], (err, data) =>{
        if (err) return res.status(400).json(err)
        return res.json({Status:"Success"})
    })
})

app.delete("/register/:semester_id/:student_id/:course_id",  (req, res) => {
    const q = "CALL delete_register(?)"
    const value = [req.params.semester_id, req.params.student_id, req.params.course_id]
    db.query(q, [value], (err, data) =>{
        if (err) return res.status(400).json(err)
        return res.json({Status:"Success"})
    })
})

app.get("/registerbycourse/:semester_id/:course_id", (req,res) => {
    const value = [req.params.semester_id, req.params.course_id]
    const q = "CALL get_register_by_course(?)"
    db.query(q, [value], (err,data) => {
        if (err) return res.json(err)
        return res.json(data[0])
    })
})

app.get("/class/:semester_id/:course_id", (req,res) => {
    const value = [req.params.semester_id, req.params.course_id]
    const q = "CALL get_class_by_course(?)"
    db.query(q, [value], (err,data) => {
        if (err) return res.json(err)
        return res.json(data[0])
    })
})

app.get("/class/:semester_id/:course_id/:group_id", (req,res) => {
    const value = [req.params.semester_id, req.params.course_id, req.params.group_id]
    const q = "CALL get_class_by_group(?)"
    db.query(q, [value], (err,data) => {
        if (err) return res.json(err)
        return res.json(data[0])
    })
})

app.post("/class", (req,res) =>{
    const q = "CALL add_new_class(?)";
    const values = [
        req.body.course_id,
        req.body.semester_id,
        req.body.group_id,
        req.body.class_building,
        req.body.room_number,
        req.body.lecturer_id,
    ]
    db.query(q,[values], (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json("Class has been added successfully")
    });
});

app.delete("/class/:semester_id/:course_id/:group_id", (req,res) => {
    const value = [req.params.semester_id, req.params.course_id,req.params.group_id]
    const q = "CALL delete_class(?)"
    db.query(q, [value], (err,data) => {
        if (err) return res.json(err)
        return res.json(data[0])
    })
})
app.get("/time/:semester_id/:course_id/:group_id", (req,res) => {
    const value = [req.params.semester_id, req.params.course_id, req.params.group_id]
    const q = "CALL get_time_by_group(?)"
    db.query(q, [value], (err,data) => {
        if (err) return res.json(err)
        return res.json(data[0])
    })
})

app.post("/time", (req,res) => {
    const values = [
        req.body.semester_id,
        req.body.course_id,
        req.body.group_id,
        req.body.time_week,
        req.body.time_day,
        req.body.time_start,
        req.body.time_end
    ]
    const q = "CALL add_time(?)"
    db.query(q,[values], (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json("Time has been added successfully")
    });
})

app.delete("/time/:semester_id/:course_id/:group_id/:time_week/:time_day/:time_start/:time_end", (req,res) => {
    const value = [req.params.semester_id, req.params.course_id, req.params.group_id, req.params.time_week,req.params.time_day, req.params.time_start, req.params.time_end]
    const q = "CALL delete_time(?)"
    db.query(q, [value], (err,data) => {
        if (err) return res.status(400).json(err)
        return res.json("Time has been deleted successfully")
    })
})


app.listen(8800,() => 
    console.log("Connected to backend")
)