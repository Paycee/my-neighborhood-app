const express=require('express');
const cors=require('cors');
const mysql=require('mysql');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));




const params={
  host:"localhost",
  user:"root",
  password:"",
  database:"streliste"
}

const connection=mysql.createConnection(params);
connection.connect((err)=>{
  if (err) throw err;
  console.log(`connect to database....`);
 })


app.get("/prikaziUlice",(req,res)=>{
  let query="select * from ulice";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziPrevoz",(req,res)=>{
  let query="select * from prevoz";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziKafice",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'пиће';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziRestorane",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'храна';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziSupermarkete",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'супермаркет';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziBanke",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'новац';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziSkole",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'школовање';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziLecenje",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'лечење';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziFrizere",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'фризер';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});

app.get("/prikaziKladionice",(req,res)=>{
  let query="select l.naziv,adresa"
  +" from lokal l join lokalUsluga lu on l.id = lu.lokal"
  +" join usluga u on u.id = lu.usluga"
  +" where u.naziv like 'кладионица';";
  connection.query(query,(err,result)=>{
if (err) throw err;
res.send(result);
});
});


app.post('/predajVizu', (req, res)=>{

  let query = "insert into viza(ime, prezime, godiste, jmbg) values ?";
  let values = [[req.body.ime, req.body.prezime, req.body.godiste, req.body.jmbg]];
  connection.query(query, [values], (err, data)=> { 
    if (err) throw err;
       console.log("Affected rows: " + data.affectedRows);
       res.send(data);
      })
});



const port=5018;
app.listen(port,()=>{
  console.log(`server running on port ${port}...`);
});
