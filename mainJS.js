document.onclick = onUserClick;

function onUserClick(event) {
    let targetBlock = event.target;

    if (targetBlock.classList.contains('closed')) {
        targetBlock.classList.remove('closed');
        targetBlock.classList.add('opened');
    }
    else if (targetBlock.classList.contains('opened')) {
        targetBlock.classList.remove('opened');
        targetBlock.classList.add('closed')
    }
}