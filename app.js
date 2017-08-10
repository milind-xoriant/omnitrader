var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  var timer = setInterval(function(){
    socket.emit('news', Math.floor((Math.random() * 10) + 1));  
  }, 1000)
  
  socket.on('my other event', function (data) {
    console.log(data);
    clearInterval(timer);
  });
});