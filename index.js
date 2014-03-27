var raspivid = require('raspivid');
var fs = require('fs');
var http = require('http');
var file = fs.createWriteStream('video.h264');

/*
function(options){
  options = options || {};

  var args = [
    '--nopreview'
  ]

  Object.keys(options || {}).forEach(function(key){
    args.push('--' + key);
    var val = options[key];
    if(val){
      args.push(val);
    }
  })

  args.push('-o')
  args.push('-')

  // the avconv stream that inherits stderr
  var video_process = child.spawn('raspivid', args, {
    stdio: ['ignore', 'pipe', 'inherit']
  });

  return video_process.stdout;
}


 var child = spawn('prg', [], {
   detached: true,
   stdio: [ 'ignore', out, err ]
 });
*/
var video = raspivid();

video.pipe(file);


http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/plain'});
 // res.end('Hello World\n');
  //raspivid().pipe(res);
 //fs.createReadStream('video.h264').pipe(res);
}).listen(1337, '192.168.2.15');

console.log('Server running at http://192.168.2.15:1337/');
