var mongoose= require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var User=mongoose.model('User2',schema,'users2');

User.update({_id:'5941ef156ac0260d298c8217'},{$set:{email:'changed@ittepic.edu.mx'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('actualizacion aplicada');
    console.log(docs);
    process.exit(0);
});