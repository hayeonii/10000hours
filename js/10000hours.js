const btnHow = document.querySelector('#how-btn')

btnHow.addEventListener('click', function(e) {
    e.preventDefault()

    // 값 받아와서 Result에 출력
    const task = document.querySelector('#input-task').value
    const hour = document.querySelector('#input-hour').value

    const resultTask = document.querySelector('#result-task')
    const resultHour = document.querySelector('#result-hour')

    resultTask.innerHTML = task
    resultHour.innerHTML = 10000/hour

    
    // 시계 효과, 결과 보여주기
    const clock = document.querySelector('.clock')
    const result = document.querySelector('.contents-result')
    clock.style.display = 'block'

    setTimeout(() => {
        clock.style.display = 'none'
        result.style.display = 'block'
    }, 3000)
})