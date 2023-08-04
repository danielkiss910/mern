const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Book2Schema = new Schema ({
    title:String,
    author:String,
    comment:String,
    createdAt:Date
});

const Book2 = model ('Book2', Book2Schema);

module.exports = Book2;