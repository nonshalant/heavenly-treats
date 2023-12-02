const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes/api/api')

connectDB();
app.use(cors());

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use('/cart', require('./routes/api/cart'));
app.use('/feedback', require('./routes/api/feedback')); 
app.use('/reviews', require('./routes/api/reviews'));
app.use('/subscribers', require('./routes/api/subscribers'));

app.use(express.urlencoded({extended:false}));
app.use(routes);  

app.set('port', 4000);

app.listen(PORT, (req, res)=>{
    console.log(`listening port: ${PORT}`)
});   