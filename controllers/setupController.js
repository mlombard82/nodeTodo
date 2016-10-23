var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){
        
        //seed database
        var starterTodos = [
            {   username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachement: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachement: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachement: false
            }
        ];
        Todos.create(starterTodos, function(err,
         results){
             res.send(results);
        });
    });
}