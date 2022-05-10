const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./Models/Task');
const cors = require('cors');

app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//create database connection
config.authenticate().then(function(){
    console.log('Database is connected');
}).catch(function(err){
    console.log(err);
});

//Retrieve a list of all tasks
app.get('/', function(req,res){
    Task.findAll().then(function(result){
        res.send(result);
    }).catch(function(err){
        res.send(err);
    });
});

//Create a new task
app.post('/', function(req,res){
    Task.create(req.body).then(function(Result){
        res.redirect('/');
    }).catch(function(err){
        res.send(err);
    });
});

//delete a task
app.delete('/:id', function(req,res){
    var taskId = req.params.id
    Task.findByPk(taskId).then(function(result){
        if(result){
            result.destroy().then(function(){
                res.send(result);
            }).catch(function(err){
                res.send(err);
            });
        } else {
            res.send('Task not found');
        };
    }).catch(function(err){
        res.send(err);
    });
});

//update priority or progress level of a task
app.patch('/:id', function(req,res){
    var taskId = req.params.id;
    Task.findByPk(taskId).then(function(result){
        if(result){
            if (req.body.progress_level !== undefined) {
                result.progress_level = req.body.progress_level;
            }
            if (req.body.priority_level !== undefined) {
                result.priority_level = req.body.priority_level;
            }
            result.save().then(function(){
                res.send(result);
            }).catch(function(err){
                res.send(err);
            });
        } else {
            res.send("task ID does not exist");
        }
    }).catch(function(err){
        res.send(err);
    });
});

//process.env.port for heroku, 3000 for local
app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
});