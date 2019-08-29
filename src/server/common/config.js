const path = require('path');

var listenPort = 8091;
var uploadFolder = path.join(__dirname, '../uploads');
var zookeeperConfig = '127.0.0.1:2181';
module.exports = {
    listenPort,
    uploadFolder,
    zookeeperConfig
}
