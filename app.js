const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Mock PaaS</h1>');
});

console.log("배성빈 멍청")

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));