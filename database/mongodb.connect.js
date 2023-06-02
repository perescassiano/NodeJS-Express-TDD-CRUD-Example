const mongoose = require('mongoose');

const connect = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todo-tdd',
        {useNewUrlParser: true});
    } catch (error) {
        console.error('Error connecting to database');
        console.error(error);
    }
    
}

module.exports = {connect};