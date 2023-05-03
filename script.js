const clickMe = document.querySelector('button');
function alertBtn() {
    alert('Hello, World!')
    document.querySelector('#result').innerText ='Button Clicked'
}
clickMe.addEventListener("click", alertBtn);
