const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let storedName = '';

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Please enter your name to receive a greeting.</p>
    <form method="POST" action="/greet">
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit">Get Greeting</button>
    </form>
  `);
});

app.post('/greet', (req, res) => {
  storedName = req.body.name;
  res.redirect('/greet');
});

app.get('/greet', (req, res) => {
  res.send(`
    <h1>Hello, ${storedName}!</h1>
    <a href="/">Go Back</a>
  `);
});

app.listen(3000, () => console.log('Server running on port 3000'));
