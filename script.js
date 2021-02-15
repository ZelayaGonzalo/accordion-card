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
    if(target.id ===''){
        return
    }
    if(active[target.id]){
        answers[target.id].classList.remove('faq-show');
        active[target.id] = false;
        changeArrowDown(target);
        questions[target.id].style.fontWeight ="normal";
        return
    }
    else {
        if(active.some((element)=> element === true)){
            for(let i=0;i < answers.length;i++){
                answers[i].classList.remove('faq-show');
                active[i] = false;
                questions[i].style.fontWeight ="normal";
                changeArrowDown(questions[i])
            }
        }
        answers[target.id].classList.add('faq-show');
        active[target.id] = true;
        questions[target.id].style.fontWeight ="bold";
        changeArrowUp(target);
    }
      
}

function hide(event){
    const parent = event.target.parentNode;
    event.target.classList.remove('faq-show');
    questions[parent.id].style.fontWeight ="normal";
    active[parent.id] = false;
    changeArrowDown(parent);
}

function changeArrowUp(item){
    item.querySelector('.arrow-icon').classList.add('upside');
}
function changeArrowDown(item){
    item.querySelector('.arrow-icon').classList.remove('upside');
}