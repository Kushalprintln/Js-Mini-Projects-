// console.log('connected');
let taskname = document.getElementById('taskname');
const taskcount = document.getElementById('countdown');
const cancel = document.getElementById('cancel');
const color = document.querySelectorAll("input[name=color]");
const heading = document.getElementById('heading');
const list = document.getElementById('todolist');
const addtoast = document.getElementById('add');
const clearall = document.getElementById('clear');
// console.log(color[0].value);
function updateheading(){
    if (list.innerHTML === "") {
        heading.innerHTML = '<img src="./images/sadtost.jpg" alt="">No Toast is  Added';
    }
    else {
        console.log(list.innerHTML);
        heading.innerHTML = '<img src="./images/happytost.jpg" alt="">Toasts are  Added';
    }
}
updateheading();
function resetting(){
    taskname.value = '';
    taskcount.value = '';
    cancel.checked = false;
    color[0].checked = false;
    color[1].checked = false;
}
function deletingListItem(item, time){
    setTimeout(()=>{
        item.remove();
        updateheading();
    },time*1000);
}
function countdowntext(ele, time){
    let text = Number(time);
    setInterval(()=>{
        text--;
        ele.innerText = `${text}`;
    },1000);
}
// updateheading();
addtoast.addEventListener('click', () => {
    if (taskname.value === '' && taskcount.value === '') {
        alert('Add toast Task and Time')
    }
    else if (taskname.value === '') {
        alert('Add Toast Task');
    }
    else if (taskcount.value === '') {
        alert('Add Toast Time');
    }
    //  CREATING LI AND PUTTING CLASS TO IT;
    let listitem = document.createElement('li');
    listitem.className = 'tost';
    //  CREATING DIV AND PUTTING CLASS NAME TO IT 
    let tostname = document.createElement('div');
    tostname.className = 'tostname';
    // PUTTING TEXT IN THE DIV;
    // console.log(tostname.innerText);
    tostname.innerText = taskname.value;
    // IF CANCEL BUTTON IS CHECKED THEN WE WILL PUT A CANCLE BUTTON
    if (cancel.checked) {
        let Xspan = document.createElement('span');
        Xspan.innerText = '\u00d7';
        Xspan.addEventListener('click',(e)=>{
            e.target.parentElement.parentElement.remove();
            updateheading();
        })
        tostname.appendChild(Xspan);
    }
    // PUTTING DIV IN THE LISTITEM
    listitem.appendChild(tostname);
    // CREATING TIMER DIV IMAGE AND APPENDING 
    let timer = document.createElement('div');
    timer.className = 'timer';
    let clockimage = document.createElement('img');
    clockimage.setAttribute('src', './images/alarm clock.gif');
    timer.appendChild(clockimage);
    // we are first appending the child and then updat6ing timer so the clock does not get removed
    let Cspan = document.createElement('span');
    Cspan.className = 'countdown';
    Cspan.innerText = taskcount.value;
    timer.appendChild(Cspan);
    countdowntext(Cspan,taskcount.value);
    // APPENDING TIMER IN THE LISTITEM
    listitem.append(timer);
    // PUTTING COLOR TO THE LIST ITEM;
    console.log();
    if(color[0].checked){
        listitem.classList.add('green');
    }
    else if(color[1].checked){
        listitem.classList.add('red');
    }
    // APPENDING LIST ITEM TO THE UNORDERED LIST;
    list.prepend(listitem);
    // DELETING ITEM AFTER THAT MANY SECONDS
    updateheading();
    deletingListItem(listitem,taskcount.value);
    resetting();
});
clearall.addEventListener('click',()=>{
    list.innerHTML = '';
    updateheading();
})
