const inputXML=require('../util/defaultInput').inputXML
const inputXSL=require('../util/defaultInput').inputXSL
const modelTransform=require('../models/transformXML')
var ls = require('local-storage');
const localStorage=require('localStorage')
var NodeCache = require('node-cache');
var myCache = new NodeCache();

exports.getIndex=(req,res,next)=>{
   
    var cached = myCache.get('user-cache'); 
    let userXML,userParameters;
    let userXSL;
    let outputXML   

    try{
         userXML=cached['inputXML']
         userXSL=cached['inputXSL']
         outputXML=cached['outputXML']
         userParameters=cached['userParameters']
         
    }catch{
        console.log('New Request')
    }
    // console.log(userXML)
    if(!userXML)
    {
        userXML=inputXML
    }
    if(!userXSL )
    {
        userXSL=inputXSL
    }
    res.render('Home/home',{
        inputXML:userXML,
        inputXSL:userXSL,
        outputXML:outputXML,
        userParameters:userParameters
    })
}


exports.transformXML=(req,res,next)=>{
    const userXML=req.body.inputxml
    let userXSL=req.body.inputxsl
    let  count = Object.keys(req.body).length
    let bodyKeys=Object.keys(req.body)
    let paramKeys=bodyKeys.filter(item=>item.startsWith('parameter'))
    const lenghtParamKeys=paramKeys.length
    let lenghtParam=lenghtParamKeys/2
    const userParameters=[];
    let finalXSL=req.body.inputxsl
    let i;;
    
   
    for(i=0;i<lenghtParamKeys;i=i+2)
    {
        
        let  cur_key=req.body[paramKeys[i]]
        
        cur_value=req.body[paramKeys[i+1]]
        userParameters.push(cur_key,cur_value)
       
        let searchKey="<xsl:param name=\""+ cur_key +"\"/>"
        let constainsVariable=finalXSL.search(searchKey);
        if(constainsVariable==-1)
        {
            searchKey="<xsl:param name='"+ cur_key +"'/>"
            constainsVariable=finalXSL.replace(/^\s+|\s+$/gm,'').search(searchKey);
        }
        if(constainsVariable!=-1)
        {
            let replaceValue="<xsl:param name='"+cur_key+"' select=\"'"+cur_value+"'\"/>"
            let splitUserXSL=finalXSL.split(searchKey)
            finalXSL=splitUserXSL[0] + replaceValue + splitUserXSL[1]
            console.log(replaceValue)
        }
       
    }

   
  
    const transformedOutput=modelTransform.transfrom(userXML,finalXSL)

    
    var result = {'inputXML': userXML,'inputXSL':userXSL,'outputXML':transformedOutput,userParameters:userParameters};
    myCache.set('user-cache', result);
    res.redirect("/")


    
    
}