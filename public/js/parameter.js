function addParameter(){

   // Generate a dynamic number of inputs
   //var number = document.getElementById("member").value;
   // Get the element where the inputs will be added to
   var container = document.getElementById("parameter-key-value");
   var containerLength=container.children.length+1
   // Remove every children it had before
console.log(container.children.length)
//    while (container.hasChildNodes()) {
//        container.removeChild(container.lastChild);
//    }
//    for (i=0;i<2;i++){
//        // Append a node with a random text
//        container.appendChild(document.createTextNode("Member " + (i+1)));
//        // Create an <input> element, set its type and name attributes
//        var input = document.createElement("input");
//        input.type = "text";
//        input.name = "member" + i;
//        container.appendChild(input);
//        // Append a line break 
//        container.appendChild(document.createElement("br"));
//    }

//craete a div element
var parameterDiv=document.createElement("div");
parameterDiv.name=parameterDiv.id="parameter-key-value-"+ containerLength
parameterDiv.style=`
    margin:5px;
    display:flex;
    flex-direction:row   
`
container.appendChild(parameterDiv);


var key_value_tags_style=`
margin:5px;
width:100px`

var parameterName = document.createElement("input");
parameterName.type = "text";
parameterName.name=parameterName.id = "parameter_key_"+ containerLength
parameterName.style=key_value_tags_style
parameterName.placeholder="Name"
parameterDiv.appendChild(parameterName);

var parameterValue = document.createElement("input");
parameterValue.type = "text";
parameterValue.name=parameterValue.id = "parameter_value_"+ containerLength
parameterValue.style=key_value_tags_style
parameterValue.placeholder="Value"


parameterDiv.appendChild(parameterValue);

var removeBtn = document.createElement("button");
removeBtn.type = "button";
removeBtn.name = "removeBtn_"+ containerLength
removeBtn.id="removeBtn_"+ containerLength
removeBtn.innerHTML ="Remove"
removeBtn.style=key_value_tags_style

removeBtn.onclick = function(id)
{
  var removeParamId="parameter-key-value-"+ containerLength
  var removeElementId = document.getElementById(removeParamId);
  container.removeChild(removeElementId)
}
parameterDiv.appendChild(removeBtn);





}

function removeParameter(id)
{
    var container = document.getElementById("parameter-key-value");
    var removeParamId="parameter-key-value-"+ id
    var removeElementId = document.getElementById(removeParamId);
    container.removeChild(removeElementId)
    console.log("awd")
}