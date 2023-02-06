const ToDoModel = require('../models/ToDoModel')


module.exports.getToDo = async (req,res) => {
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}

module.exports.saveToDo = async (req,res) => {
    const {text} = req.body
   ToDoModel
   .create({text})
   .then((data) => {
    console.log("added succesfully")
    console.log(data)
    res.send(data)
   })
   
}

module.exports.updateToDo = async (req,res) => {
    const {_id, text} = req.body
    ToDoModel.findByIdAndUpdate(_id, {text})
    .then(()=> 
        res.send("updated successfully"))
        .catch((err) => console.log(error))
    
}

module.exports.deleteToDo = async (req,res) => {
    const {_id, text} = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(()=> 
        res.send("deleted successfully"))
        .catch((err) => console.log(error))
    
}