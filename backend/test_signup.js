const http = require('http');
const unique = Date.now();
const data = JSON.stringify({
  name: 'Test User X',
  email: `testuserx.${unique}@example.com`,
  password: 'password123',
  passwordConfirm: 'password123',
  phoneNumber: '0123456789',
  role: 'admin',
  avatar: '/images/images.png'
});

const options = {
  hostname: '127.0.0.1',
  port: 4000,
  path: '/api/v1/users/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  console.log('status', res.statusCode);
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('body', body);
    process.exit(0);
  });
});

req.on('error', (e) => { console.error('err', e.message); process.exit(1); });
req.write(data);
req.end();
