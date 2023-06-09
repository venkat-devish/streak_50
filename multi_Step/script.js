const steps = document.querySelector('.steps_container');
let n = 5;
generateSteps(n);
let ref = 0;
let percent = 0;
const step = document.querySelectorAll('.step');
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const step_bar = document.querySelector('.status_bar');

step[ref].classList.add('active')
prev.classList.add('disabled');
prev.setAttribute('disabled', '')
next.addEventListener('click', update)
prev.addEventListener('click', remove)

function remove() {
    ref -= 1;
    if (ref === 0) {
        prev.classList.add('disabled');
        prev.setAttribute('disabled', '')
    }
    next.classList.remove('disabled');
    next.removeAttribute('disabled')
    const actives = document.querySelectorAll('.active')
    let prev_cnt = actives.length - 1;
    if (prev_cnt > 0) {
        step[prev_cnt].classList.remove('active')
        prev_cnt - 1;
    }
    percent = ((actives.length - 2) / (n - 1)) * 100;
    step_bar.style.width = `${percent}%`;
}

function update() {
    ref += 1;
    prev.classList.remove('disabled');
    prev.removeAttribute('disabled', '')
    if (ref > n - 2) {
        next.classList.add('disabled');
        next.setAttribute('disabled', '')
    }
    step[ref].classList.add('active')
    const actives = document.querySelectorAll('.active')
    percent = ((actives.length - 1) / (n - 1)) * 100;
    step_bar.style.width = `${percent}%`;
}

function generateSteps(n) {
    for (let i = 1; i <= n; i++) {
        const step = document.createElement('div');
        step.classList.add('step')
        step.innerText = i;
        steps.append(step)
    }
}

