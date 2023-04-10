const https = require('https');

const options = {
  host: 'localhost',
  port : 5000,
  path: '/api/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

https.get(options, (response) => {
  let body = '';
  response.on('data', (chunk) => {
    body += chunk;
  });
  response.on('end', () => {
    console.log('Response from API:', body);
  });
}).on('error', (error) => {
  console.error('Error making request to API:', error);
});
