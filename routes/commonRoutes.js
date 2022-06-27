const express=require('express')
const routes=express.Router()
const indexController=require('../controllers/indexController')

routes.get("/",indexController.getIndex)
routes.post("/",indexController.transformXML)

module.exports=routes