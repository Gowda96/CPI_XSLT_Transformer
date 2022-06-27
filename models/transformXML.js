
const saxon=require('saxon-js')
const env = saxon.getPlatform();

class TransformXML{
    TransformXML(){

    }

    static  transfrom(xml,xsl){
        try{
            const doc = env.parseXmlFromString(xsl)
            doc._saxonBaseUri = "file:///";
            const sef = saxon.compile(doc);
            let user='12'
           const resultStringXML = saxon.transform({
            
               stylesheetInternal: sef,
               sourceText: xml,
               destination:"serialized",
               params:"<user value=8><user/>"
               
           });
          
           return resultStringXML.principalResult
        }
        catch(exception){
            
            return exception.message
        }
       
       
    }
}

module.exports=TransformXML