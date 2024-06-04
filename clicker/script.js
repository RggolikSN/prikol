document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickbutton');
    const clickedText = document.getElementById('clicked');

    // Получаем сохраненное значение из локального хранилища (если оно есть)
    let count = localStorage.getItem('clickCount') || 0;

    // Обновляем текст на странице с сохраненным значением
    clickedText.textContent = count;

    function incrementCount() {
        // Увеличиваем счетчик
        count++;
        // Обновляем текст на странице
        clickedText.textContent = count;
        // Сохраняем значение в локальное хранилище
        localStorage.setItem('clickCount', count);
    }

    clickButton.addEventListener('click', incrementCount);
});

function back(){
    setTimeout(() => {
        window.location.href='https://rggoliksn.github.io/prikol/';
    }, 2000);
}
