const btnHow = document.querySelector('#how-btn')
const goTraining = document.querySelector('#training')
const realTraining = document.querySelector('#real-training')
const share = document.querySelector('#share')

btnHow.addEventListener('click', function(e) {
    e.preventDefault()

    const task = document.querySelector('#input-task')
    const hour = document.querySelector('#input-hour')
    const resultTask = document.querySelector('#result-task')
    const resultHour = document.querySelector('#result-hour')
    const clock = document.querySelector('.clock')
    const result = document.querySelector('.contents-result')

    

    if (task.value === '' || hour.value === '') {
        alert('빈 곳을 모두 입력해 주세요')
        return (result.style.display = 'none')
    }

    result.style.display = 'none'
    clock.style.display = 'block'
    
    setTimeout((e) => {
        clock.style.display = 'none'
        result.style.display = 'block'
        resultTask.innerHTML = task.value
        resultHour.innerHTML = Math.floor(10000/hour.value)
    }, 3000)
})


// modal 띄우기
goTraining.addEventListener('click', function() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'block'
})


// modal 닫기 (나중에 닫기 버튼 따로 만들고 링크 연결하면 좋을 듯)
realTraining.addEventListener('click', function(e) {
    const modal = document.querySelector('.modal')
    modal.style.display = 'none'
    e.preventDefault()
})


// URL 복사
share.addEventListener('click', function() {
    const dummy   = document.createElement("input");
    const text    = location.href;
    
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert('URL이 복사되었습니다')
})