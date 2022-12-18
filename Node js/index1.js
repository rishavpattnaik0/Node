
const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors());

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"students",
})
const port=process.env.port||1999

con.connect(function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected");
    }
})
// app.post('/createDatabase',async function(req,res){
    
//     const sql="CREATE DATABASE students";
//     await con.query(sql,function(err){
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             console.log("Created database !")
//         }
//     });
    
    const sql="CREATE TABLE details(id INT,name  VARCHAR(55),SSN INT PRIMARY KEY,Gender VARCHAR(55),Salary INT,Department VARCHAR(55))"
    await con.query(sql,function(err){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("Table Created");
        }
    });


    // const sql="INSERT INTO  student.details (name,SSN,Gender,Salary,Department) VALUES ?"
    // const values=[
    //     ["Shreyas",103 ,"Male",300000,"Finance"],
    //     ["Shreyas1",104,"Female",500000,"CSE"],
    //     ["Shreyas2",108,"Male",700000,"Finance"],
    //     ["Shreyas3",106,"Female",200000,"ECE"],
    //     ["Shreyas4",107,"Male",1000000,"CSE"],
    // ]
    
//     await con.query(sql,[values],function(err,result){
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             console.log("Values are inserted into Table");
//             console.log(result);
//         }
//     });

// });

// app.get("/getEmployees",async function(req,res){
//     const dept="Finance";
//     const sql='SELECT * FROM hackerr.shreyas WHERE Department=?'
//     await con.query(sql,[dept],function(err,result){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(JSON.parse(JSON.stringify(result)));
//             res.send(JSON.parse(JSON.stringify(result)));
//         }
//     });


    // const sql="UPDATE hackerr.shreyas SET Department='Mech' WHERE name='Shreyas3' ";
    // await con.query(sql,function(err,result){
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     else{
    //         console.log(result);
    //     }
    // });
// })

// app.delete("/deleteEmployee",async function(req,res){
//     const Salary=500000;
//     const sql="DELETE FROM hackerr.shreyas WHERE Salary<=?"
//     await con.query(sql,[Salary],function(err,result){
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             console.log(JSON.parse(JSON.stringify(result)));
//         }
//     })
// });

app.listen(port,function(err){
    console.log(`Listening on ${port}`);
});