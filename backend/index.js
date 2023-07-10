const express = require('express');
const flockRoutes = require('./routes/flock');
const costRoutes = require('./routes/cost');
const applyMiddleware = require('./middleware/middlewar');
const app = express();
const port = process.env.PORT || 3001;

applyMiddleware(app);

app.use('/flock', flockRoutes);
app.use('/cost', costRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
