var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        '@ds063946.mlab.com:63946/nodetodosample';
    }
}