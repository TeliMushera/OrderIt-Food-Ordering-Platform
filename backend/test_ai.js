const http = require('http');

const data = JSON.stringify({
  name: 'Test Burger',
  category: 'Burger',
  spiceLevel: 'Medium',
  price: 250
});

const options = {
  hostname: 'localhost',
  port: 4000,
  path: '/api/v1/ai/generate-food-ai',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('status', res.statusCode);
    console.log('body', body);
  });
});

req.on('error', (e) => {
  console.error('err', e.message);
});

req.write(data);
req.end();
