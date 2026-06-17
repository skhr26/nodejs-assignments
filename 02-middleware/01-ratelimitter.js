// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

app.use((req,res,next)=> {
  const id=req.header(user-id);

  if(!id) {
    return res.status(400).json({error:"id is invalid"});
  }
    
  const curTime=Math.floor(Date.now()/1000);
  if(!numberOfRequestsForUser[id]) {
    numberOfRequestsForUser[id]={count:0,requestTime:curTime};
  }

  if(curTime===numberOfRequestsForUser[id].requestTime) {
    numberOfRequestsForUser[id].count++;
  }
  else {
    numberOfRequestsForUser[id].count=1;
    numberOfRequestsForUser[id].requestTime=curTime;
  }

  if (userData.count > 5) {
    // rate limit kar diya hai
    return res.status(404).json({ error: 'Too many requests' });
  }

  next();

})
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;