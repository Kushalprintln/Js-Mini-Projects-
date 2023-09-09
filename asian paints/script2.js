const apply = document.getElementById('apply-btn');
const reset = document.getElementById('reset-btn');
apply.addEventListener('click',()=>{
    let wallid = document.getElementById('wall_id');
    let wallcolor = document.getElementById('wall_color');
    let wall = document.getElementById(`${wallid.value}`);
    wall.style.backgroundColor = wallcolor.value;
})
const allWalls = document.getElementsByClassName('block');
reset.addEventListener('click',()=>{
    for(let wall of allWalls){
        wall.style.backgroundColor = "";
    }
})
localStorage.setItem('name','kushal');
localStorage.setItem('age','25');
localStorage.setItem('name','anothername');
const name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('name');