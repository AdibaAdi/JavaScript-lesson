// // var button= document.getElementsByTagName("button")[0];

// // button.addEventListener("click",function(){
// // console.log("Click!!");//everytime user clicks the function will work
// // });



// var button= document.getElementById("enter");
// var input= document.getElementById("userinput");
// var ul =document.querySelector("ul");//to attach the appendchild to unorderlist


// function inputlength(){
// 	return input.value.length;
// }

// function createListElement(){
// 	var li=document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value= "";//emptys string after putting a new value

// }

// function addListAfterClick(){
// 	if(inputlength()>0){
// 			// console.log(input.value);
// 		createListElement();
// }
// }

// function addListAfterKeyPress(event){
// 	// console.log(event.which);
// 	if(inputlength()>0 && event.key === 'Enter'){
// 		createListElement();
// }
// }

// // add event listener
// button.addEventListener("click", addListAfterClick);

// button.addEventListener("keypress", addListAfterKeyPress);
// 	
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");



//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target;
	
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;


}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


//adding new items:

function inputLength(){
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}


function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);
