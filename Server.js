const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE'],
    credentials: true,
  }));

app.use(express.json()); // Add this line to parse JSON in the request body

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Latha@123',
  database: 'Students_details'
});


app.get('/', (req, res) => {
    return res.json("Backend server");
  });
  
  app.get('/get', (req, res) => {
    const sql = "SELECT * FROM Student";
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);s
    });
  });

  app.get('/get/:id',(req,res)=>{
    const sql="select * from Student where id=?";
    const id = parseInt(req.params.id, 10);
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error:err});
        return res.json(result);
    })
})

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE Student SET Name=? ,Class=?,Board=?,School=?,Pre_Class_Score=?,Subject=?,Timings=?,Parent_number=?,Guardian_Name=? WHERE id=?";
    const id = parseInt(req.params.id, 10);

    db.query(sql, [req.body.name, req.body.marks, id], (err, result) => {
        if (err) return res.json({ error: err.message });
        return res.json({ updated: true });
    });
});

app.post("/post ",(req,res)=>{
    const sql="INSERT INTO Student (Name, Class, Board, School, Pre_Class_Score, Subject, Timings, Parent_number, Guardian_Name)Values(?)";
    const values =[
        req.body.Name,
        req.body.Class,
        req.body.Board,
        req.body.School,
        req.body.Pre_Class_Score,
        req.body.Subject,
        req.body.Timings,
        req.body.Parent_number,
        req.body.Guardian_Name
    ];
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json({Status:"Success"})
    })
})

app.delete("/delete", (req, res) => {
    const sql = "DELETE FROM Student";

    db.query(sql, (err, result) => {
        if (err) return res.json({ error: err.message });
        if (result.affectedRows === 0) {
            return res.json({ deleted: false, message: "No records found" });
        }

        return res.json({ deleted: true });
    });
});


app.delete("/delete/:id", (req, res) => {
    const sql = "DELETE FROM Student WHERE id=?";
    const id = parseInt(req.params.id, 10);

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.json({ deleted: false, message: "Record not found" });
        }

        return res.json({ deleted: true });
    });
});


app.listen(8090, () => {
    console.log("Listening");
  });
  
