var pty = require('pty.js');
  
module.exports = {
	login: function(username, host, password, cb) {
		if(!username || !host)
			cb(new Error("username or host not given"));
		if(host == "iitk"){
			host = "vyom.cc.iitk.ac.in";
		}
	
var term = pty.spawn('ssh', [username+'@'+host], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});
	
	term.on('data', function(data) {
		 if(data.search('Could') >= 0){
     cb(new Error("username or host not recheable"));
  } else if (data.search('authenticity') >= 0){
      term.write('yes\n');
  } else if (data.search('password:') >= 0){
      term.write(password+'\n');
  }	else if (data.search('denied') >= 0){
   		cb(new Error("password is wrong"));
  } else if (data.search('exit') >= 0){
   		// process exited , no need to do anything 
  } else {
      term.write('exit\n');
  	cb(null, true);
  	}
});



}
}