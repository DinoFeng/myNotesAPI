var Promise = require('bluebird');
var mongoose = require('mongoose');

mongoose.Promise = Promise;

var connection="mongodb://workbench_user:1234567@ds062339.mlab.com:62339/instant_noodle_db";
/**
 * 连接
 */
mongoose.connect(connection);

/**
  * 连接成功
  */
mongoose.connection.on('connected', () => {    
    console.log('Mongoose connection open to ' + connection);  
});

/**
 * 连接异常
 */
mongoose.connection.on('error', (err) => {    
    console.log('Mongoose connection error: ' + err);  
});
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {    
    console.log('Mongoose connection disconnected');  
});

module.exports = mongoose;