const express=require('express');
const app = express();
const path=require('path')
const routes=require('./routes/commonRoutes')
const bodyparser=require('body-parser')
var cookieParser = require('cookie-parser');
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyparser.urlencoded({extended:false}))
app.use(cookieParser());
app.set('view engine','ejs')
app.use(routes)


app.listen(3000)

