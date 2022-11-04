const btnHow = document.querySelector('#how-btn')

btnHow.addEventListener('click', function(e) {
    e.preventDefault()

    // 값 받아와서 Result에 출력
    const task = document.querySelector('#input-task').value
    const hour = document.querySelector('#input-hour').value

    const resultTask = document.querySelector('#result-task')
    const resultHour = document.querySelector('#result-hour')

    resultTask.innerHTML = task
    resultHour.innerHTML = Math.floor(10000/hour)

    
    // 시계 효과, 결과 보여주기
    const clock = document.querySelector('.clock')
    const result = document.querySelector('.contents-result')

    clock.style.display = 'block'
    result.style.display = 'none'
    setTimeout(() => {
        clock.style.display = 'none'
        result.style.display = 'block'
    }, 3000)
})


const goTraining = document.querySelector('#training')

// modal 띄우기
goTraining.addEventListener('click', function() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'block'
})

const realTraining = document.querySelector('#real-training')

// modal 닫기 (나중에 닫기 버튼 따로 만들고 링크 연결하면 좋을 듯)
realTraining.addEventListener('click', function(e) {
    const modal = document.querySelector('.modal')
    modal.style.display = 'none'
    e.preventDefault()
})

const share = document.querySelector('#share')

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