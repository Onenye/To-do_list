function newElement() {
    let li=document.createElement("LI");
    let inputValue=document.getElementById("inputDisplay").value ;

    let t=document.createTextNode(inputValue);
    li.appendChild(t);
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

let myNodelist=document.getElementsByTagName("LI");
let i;
for (let i = 0; i < array.length; i++) {
    let span=document.createElement("SPAN");
    let txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let list=document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked')
    }
}, false)

let close=document.getElementsByClassName('close');

for (let i = 0; i < array.length; i++) {
    close[i].onclick=function(){
        let div=this.parentElement;
        div.style.display="none";
    }
    
}
    
