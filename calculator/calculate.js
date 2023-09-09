let str = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.value == '='){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.value == 'AC'){
            str = "";
            document.querySelector('input').value = str;
        }
        else{
            console.log(e.target);
            str = str + e.target.value;
            document.querySelector('input').value = str;
        }

    })
})