let mongoose = require('mongoose');

let teacherSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        validate: {
            validator: function (newName) {
                return (newName.length > 3);
            },
            message: 'Name should be at least 3 characters'
        }
    },
    school: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]

});

module.exports = mongoose.model('Teacher', teacherSchema);