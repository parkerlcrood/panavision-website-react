const thumbnail = document.getElementsByClassName('merchimage');
const body = document.querySelector('body');

thumbnail[0].addEventListener('click', showmodal);

function showmodal(){
    var modal = document.createElement('div');
    modalImage = document.createElement('img');
    var url = thumbnail[0].getAttribute('src');
    modalImage.src = url;
    modal.appendChild(modalImage);
    modal.setAttribute('id', 'modal');
    body.append(modal);
    modal.addEventListener('click', closemodal);
}

function closemodal(){
    modal.parentNode.removeChild(modal);
}