const questions = document.getElementsByClassName('faq-question');
const answers = document.getElementsByClassName('faq-answer');
const active=[];
for(let i=0;i < questions.length;i++){
    questions[i].addEventListener('click',activate);
    answers[i].addEventListener('click',hide);
    questions[i].id=i;
    active[i]=false;
}

function activate(event){
    target = event.target;
    if(active[target.id] === true && typeof(active[target.id]) === 'boolean'){
        answers[target.id].style.display='none';
        active[target.id] = false;
        changeArrowDown(target);
        return
    }
    else {
        if(typeof(active[target.id]) === 'boolean'){
            if(active.some((element)=> element === true)){
                for(let i=0;i < answers.length;i++){
                    answers[i].style.display ='none';
                    active[i] = false;
                    changeArrowDown(questions[i])
                }
            }
            answers[target.id].style.display = 'block';
            active[target.id] = true;
            changeArrowUp(target);
        }
    }
      
}

function hide(event){
    const parent = event.target.parentNode;
    event.target.style.display = 'none'
    active[parent.id] = false;
    changeArrowDown(parent);
}

function changeArrowUp(item){
    item.querySelector('.arrow-icon').classList.add('upside');
}
function changeArrowDown(item){
    item.querySelector('.arrow-icon').classList.remove('upside');
}