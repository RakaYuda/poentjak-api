// Implementation from http://mfikri.com/artikel/restful-api
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

//tampilkan semua data 
app.get('/api/ticket', (req, res) => {
    let sql = "SELECT * FROM ticket";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err; 
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        // res.json(results);
    });
});

//tampilkan data berdasarkan id
app.get('/api/ticket/:id', (req, res) => {
    let sql = "SELECT * FROM ticket WHERE id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Tambahkan data baru
app.post('/api/ticket', (req, res) => {
    // console.log(req.body)
    let data = { place: req.body.place, booked_name: req.body.booked_name, booked_date: req.body.booked_date };
    let sql = "INSERT INTO ticket SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        // console.log(query);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Edit data berdasarkan id
app.put('/api/ticket/:id', (req, res) => {
    let sql = "UPDATE ticket SET booked_name='" + req.body.booked_name + "' WHERE id =" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Delete data berdasarkan id
app.delete('/api/ticket/:id', (req, res) => {
    let sql = "DELETE FROM ticket WHERE id=" + req.params.id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Server listening
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});