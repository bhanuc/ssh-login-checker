var ssh = require('ssh2');

module.exports = {
  login: function(username, host, password, cb) {
    if (!username || !host)
      return cb(new Error('username or host not given'));
    if (host === 'iitk')
      host = 'vyom.cc.iitk.ac.in';

    var conn = new ssh();
    conn.on('ready', function() {
      this.end();
      cb(null, true);
    }).on('error', function(err) {
      if (typeof err.errno === 'string'
          || err.level === 'connection-timeout'
          || /timed out/i.test(err.message))
        cb(new Error('host not reachable'));
      else if (err.level === 'authentication')
        cb(new Error('password or ssh-agent keys are wrong'));
      else if (err.level !== 'agent')
        cb(err);
    }).connect({
      host: host,
      port: 22,
      username: username,
      password: password,
      agent: process.env.SSH_AUTH_SOCK
    });
  }
};
