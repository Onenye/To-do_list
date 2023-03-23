function addItem() {
    let li=document.createElement("LI");
    let inputValue=document.getElementById("inputDisplay").value ;

    let i=document.createTextNode(inputValue);
    li.appendChild(i);
    if(inputValue===''){
        alert("You must write something");
    }else{
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("inputDisplay").value="";

    let span=document.createElement("SPAN");
    let txt=document.createTextNode("\u00D7");
    span.className= 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < array.length; i++) {
        close[i].onclick=function() {
let div=this.parentElement;
div.style.display="none";
        } 
    }
}

function removeItem() {
let i=document.getElementById("myList");
let inputValue=document.getElementById("inputDisplay");
let txt= document.getElementById(inputDisplay.value);
i.removeChild(txt);
}

removeItem.addEventListener('click' , function(i) {
    Node.parentNode.removeChild(node);
})
//let myNodelist=document.getElementsByTagName("LI");
//let i;
//for (let i = 0; i < array.length; i++) {
    //let span=document.createElement("SPAN");
    //let txt=document.createTextNode("\u00D7");
    //span.className="close";
    //span.appendChild(txt);
    //myNodelist[i].appendChild(span);
//}

//let list=document.querySelector('ul');
//list.addEventListener('click', function(ev){
    //if(ev.target.tagName==='LI'){
        //ev.target.classList.toggle('checked')
   // }
//}, false)

    
