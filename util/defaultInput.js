 const inputXML=`
<root>
    <rt>
        llaw
    </rt>
</root>`

 const inputXSL=`<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
 <xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />
 <xsl:param name="user"/>
 
 <xsl:template match="@*|node()">
     <xsl:copy>
         <xsl:apply-templates select="@*|node()"/>
     </xsl:copy>
   <a>
     <xsl:value-of select="$user"/>
   </a>
 </xsl:template>
 </xsl:transform>
 
 

`
module.exports={
    inputXSL:inputXSL,
    inputXML:inputXML
}