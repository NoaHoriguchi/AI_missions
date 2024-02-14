document.getElementById('check-button').addEventListener('click', function() {
    var inputBox = document.getElementById('input-box');
    if (!inputBox.value.trim()) {
        alert('何か入力してください。');
    } else {
        document.getElementById('content').innerHTML = '<p id="task-text">うさ丸たろうの座右の銘は「好奇心は最高の先生」です。</p>';
    }
});
