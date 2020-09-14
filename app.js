let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let studentRouter = require('./routers/studentrouter');

let print = console.log;

let teacherRouter = require('./routers/teacherroute.js');

let app = express();



app.listen(8080);

app.use(bodyParser.json());


app.use('/teachers', teacherRouter);

let DB_URL = 'mongodb://localhost:27017/week7db';

mongoose.connect(DB_URL, function (err) {
    if (err) {
        print('Error connecting to DB');
    } else
        print('Connected Successfully');
});

app.get('/students', studentRouter.getAllStudents);
app.get('/students/:id', studentRouter.getStudentById);
app.post('/students', studentRouter.insertStudent);
app.delete('/students/:id', studentRouter.deleteStudent);
app.put('/students/:id', studentRouter.updateStudent);
app.put('/students/:sId/teachers/:tId', studentRouter.addTeacher);




// get /teachers  ==> retrieve all teacher
// get /teachers/:id ==> retrieve one teacher
//post /teachers ==> insert new teacher
//put /teachers/:id ==> update one teacher
//delete /teachers/:id ==> delete one teacher

// put/teachers/tid/students/sid