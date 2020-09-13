let mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
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
    age: {
        type: Number,
        required: true
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }]

});

module.exports = mongoose.model('Student', studentSchema);