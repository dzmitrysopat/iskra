// nextSteps

// nextStep2()
// nextStep3()
// nextStep4()
// nextStep5()

// prevSteps

// prevStep1()
// prevStep2()
// prevStep3()
// prevStep4()

function nextStep2(){
    if (document.getElementById("surname").value.length ==   0) {
        alert('Укажите Фамилию');
    } else if (document.getElementById("name").value.length == 0){
        alert('Укажите Имя')
    } else if (document.getElementById("birth").value.length == 0){
        alert('Вы забыли указать День рождения')
    } else if (document.getElementById("family").value.length == 0){
        alert('Укажите Семейное положение')
    } else if (document.getElementById("country").value.length == 0){
        alert('Укажите Ваше Гражданство')
    } else if (document.getElementById("city").value.length == 0){
        alert('Забыли указать Место жительства')    
    }   else{
        document.getElementById("mainInfo").classList.add("hidden");
        document.getElementById("contacts").classList.remove("hidden");
        document.getElementById("contacts").classList.add("active");
    }
}

function nextStep3(){
    if (document.getElementById("tel").value.length == 0) {
        alert('Укажите Номер телефона');
    } else if (document.getElementById("instagram").value.length == 0){
        alert('Вы забыли указать Ваш Никнейм в Instagram')
    } else if (document.getElementById("telegram").value.length == 0){
        alert('Вы забыли указать Ваш Никнейм в Telegram')
    }   else{
        document.getElementById("contacts").classList.remove("active");
        document.getElementById("contacts").classList.add("hidden");
        document.getElementById("workPlace").classList.remove("hidden");
        document.getElementById("workPlace").classList.add("active");
        document.getElementById("education").classList.remove("hidden");
        document.getElementById("education").classList.add("active");
        document.getElementById("otherEducation").classList.remove("hidden");
        document.getElementById("otherEducation").classList.add("active");
    }
}

function nextStep4(){
    if (document.getElementById("work").value.length == 0) {
        alert('Укажите Место Вашей работы');
    } else if (document.getElementById("profession").value.length == 0){
        alert('Вы не указали вашу Профессию')
    } else if (document.getElementById("almaMater").value.length == 0){
        alert('Укажите Ваше учебное заведение')
    } else if (document.getElementById("speciality").value.length == 0){
        alert('Вы не указали вашу Специализацию')
    }   else{
        document.getElementById("workPlace").classList.add("hidden");
        document.getElementById("workPlace").classList.remove("active");
        document.getElementById("education").classList.add("hidden");
        document.getElementById("education").classList.remove("active");
        document.getElementById("otherEducation").classList.add("hidden");
        document.getElementById("otherEducation").classList.remove("active");
        document.getElementById("skills").classList.remove("hidden");
        document.getElementById("skills").classList.add("active");
    }
}

function nextStep5(){
    if (document.getElementById("hardSkills").value.length == 0) {
        alert('Укажите Ваши полезные навыки');
    }   else{
        document.getElementById("skills").classList.add("hidden");
        document.getElementById("skills").classList.remove("active");
        document.getElementById("other").classList.remove("hidden");
        document.getElementById("other").classList.add("active");
    }
}

function send(){
    if (document.getElementById("minister").value.length == 0) {
        alert('Являетесь ли вы депутатом?');
    } else if (document.getElementById("young").value.length == 0){
        alert('Состоите ли вы в Молодежном Совете?')
    } else if (document.getElementById("community").value.length == 0){
        alert('Принадлежность к общественному объединению...')
    }   else{
        document.getElementById("other").classList.add("hidden");
        document.getElementById("other").classList.remove("active");
    }
}