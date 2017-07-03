export default (app) => {
  app.onlineUsers = new Array();

  app.get('/api/users', (req, res) => {
    res.send(JSON.stringify(app.onlineUsers));
  });

  app.post('/api/users', (req, res) => {
    app.onlineUsers.push(req.body.username);
    res.send(JSON.stringify({message: 'Success'}));
  });

  app.post('/api/users/:username', (req, res) => {
    for (let i = 0; i < app.onlineUsers.length; i++) {
      if (app.onlineUsers[i] === req.params.username) {
        app.onlineUsers.splice(i, 1);
        res.send(JSON.stringify({message: 'User quited'}));
      }
      else {
        res.send(JSON.stringify({message: 'Can not find such user'}));
      }
    }
  });
}
