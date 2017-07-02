export default (app) => {
  app.onlineUsers = new Array();

  app.get('/api/online', (req, res) => {
    req.send(JSON.stringify(app.onlineUsers));
  });

  app.post('/api/online', (req, res) => {
    if (req.body) {
      app.onlineUsers.push(req.body.user);
      req.send(JSON.stringify(app.onlineUsers));
    }
  });
}
