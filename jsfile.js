var li=document.getElementsByTagName("li");
var ul=document.getElementsByTagName("ul");
var button=ul[0].getElementsByTagName("button");
var enterButton=document.getElementsByTagName("button")[0];
var input=document.getElementsByTagName("input")[0];
var i;
var len=li.length;




//Adding a new list item with delete button


function createElements()
{	
var newElementLi=document.createElement("li");
newElementLi.appendChild(document.createTextNode(input.value));
ul[0].appendChild(newElementLi);
input.value="";
var newElementButton=document.createElement("button");
newElementButton.appendChild(document.createTextNode("Delete"));
newElementLi.appendChild(newElementButton);
}


function addListAfterClick(){
if (input.value.length>0){
createElements();
}
}

/*

function addListAfterKeypress(){
	if (input.value.length>0 && this.keyCode===13 )
	{
createElements();
}

*/

enterButton.addEventListener("click",addListAfterClick);

//input.addEventListener("keypress",addListAfterKeypress);





// Delete Li Element

function deleteItem(){
  this.parentNode.remove();
}


for(i=0;i<len;i++)
{
button[i].addEventListener("click",deleteItem)
}


// Li element click event


liEvent();

function toggleClass()
{
	this.classList.toggle("done");
}


function liEvent()
{

for(i=0;i<len;i++)
  {
    li[i].addEventListener("click",toggleClass);
  }
}


