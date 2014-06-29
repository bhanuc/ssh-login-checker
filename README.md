#ssh-login-checker
==

Check login credentials using SSH connection.

This was essentially build for checking iitk login credentials

Usage:

```JavaScript
var client = require("ssh-login-checker");
 
client.login('username','host','password',function(err, info){
	if(err){
		console.log(err);
	} else{
		//Do whatever you want
		//You have logged in 
	}
})

#Installation:
npm install ssh-login-checker


#Test:

pending

#Author:

Bhanu Pratap Chaudhary

#Version History

0.0.1 - First release 
0.0.2- Bug fixes