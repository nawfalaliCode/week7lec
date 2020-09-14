let Student = require('../models/student');
let mongoose = require('mongoose');

module.exports = {
    getAllStudents: function (req, res) {
        Student.find({}, 'fullName', function (err, data) {
            res.json(data);
        });
    },

    getStudentById: function (req, res) {
        Student.find({
            _id: mongoose.Types.ObjectId(req.params.id)
        }, function (err, data) {
            res.json(data);
        })
    },
    insertStudent: function (req, res) {
        let studentDetails = req.body;
        let student = new Student({
            _id: new mongoose.Types.ObjectId(),
            fullName: studentDetails.fullName,
            age: studentDetails.age
        });

        student.save(function (err) {
            if (!err) {
                res.json('Done');
            } else {
                res.json(err);
            }
        });
    },
    deleteStudent: function (req, res) {
        let studentId = req.query.id;
        Student.findByIdAndDelete({
            _id: studentId
        }, function (err, result) {
            if (!err)
                res.json(result);
            else res.json(err);
        })
    },
    updateStudent: function (req, res) {
        let newAge = req.body.age;
        Student.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                "age": newAge
            }
        }, {
            upsert: false
        }, function (err, data) {
            if (err) {
                res.json(err);
            } else res.json(data);
        })
    }
}