var client = require("../");
 
client.login('username','host','password',function(err, info){
	if(err){
		console.log(err);
	} else{
		console.log(info);
	}
})