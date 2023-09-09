const input = document.getElementById('task');
const btn = document.getElementById('add');
const listcontainer = document.getElementById('list-container');
btn.addEventListener('click',()=>{
    if(input.value === ''){
        alert("ADD Task");
    }else{
        let listitem = document.createElement('li');
        listitem.innerText = input.value;
        listcontainer.appendChild(listitem);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        listitem.appendChild(span);
        save();
    }
    input.value = '';
})
listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('selected');
        save();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }
},false)
function save(){
    localStorage.setItem('data',listcontainer.innerHTML);
}
function update(){
    listcontainer.innerHTML = localStorage.getItem('data');
}
update();