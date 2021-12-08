// Job schedule
const cron = require('node-cron');
cron.schedule('* * * * *', function() {
  
  console.log('running a task every minute. Time - ' + getDate());
  sendRequest();
  console.log('-------------------------');

});

function getDate() {
  // Get Date and Time
  const date_ob = new Date();
  // current hours
  let hours = date_ob.getHours();
  // current minutes
  let minutes = date_ob.getMinutes();

  return hours + ":" + minutes;
}

function sendRequest() {
  // request on third system
  const request = require('request');
  request('http://localhost:4004/say', { json: true }, (err, res, body) => {
    console.log(body);
  });
}

module.exports = (say)=>{
  say.on ('hello', req => `Hello ${req.data.to}!`)
  say.on ('bye', req => `Bye ${req.data.word}!`)
}
module.exports = (check)=>{
  check.on ('check', req => `Check ${req.data.var}!`)
}