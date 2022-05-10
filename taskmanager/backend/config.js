const environment = process.env.NODE_ENV || "production";//production or development

if(environment === "production") {
    host = 'vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
    database = "xlb3y7ilsr6eo915";
    username = 'm4n77hi79v381wj7';
    password= 'xmaxteiv27wez24c';
} else {
    host = 'localhost';
    database = "task_manager";
    username = 'cristina1';
    password= 'cristinAA$$33';
}
const Sequelize = require('sequelize');
const config = new Sequelize(database, username, password, {dialect: 'mysql', host: host});
//sequelize uses localhost as default host, so must add host name if using anything other than localhost

module.exports = config;