const express = require('express');
const app = express();
const PORT =  3000;
const homeRoutes = require('./routes/home');
const serviceRoutes = require('./routes/service');
const contactRoutes = require('./routes/contact');

app.use('/', homeRoutes);
app.use('/services', serviceRoutes);
app.use('/contact', contactRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});