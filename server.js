const app = require('express')();

app.get('/', (req, res) => res.send('Subscribe To UNKNOWN PHV'));

module.exports = () => {
  app.listen(3000);
}