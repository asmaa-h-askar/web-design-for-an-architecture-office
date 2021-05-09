let myLanding = document.querySelector('.landing');
let imgsArray = ["bg-01.jpg" ,"bg-02.jpg", "bg-03.jpg", "bg-04.jpg"];

setInterval(() => {
    let randomImg = Math.floor(Math.random() * imgsArray.length);
    myLanding.style.backgroundImage = 'url("images/New folder/' +imgsArray[randomImg]+ '")';
}, 10000);

/****************** ADDIND POP UP WHEN CLICKING ON AN IMAGE ***********************/
let myProjects = document.querySelectorAll('.latest-projects .gallery img');

myProjects.forEach(img => {
    img.addEventListener('click', e => {
        let overlay = document.createElement('div');
        overlay.className = 'transparent-overlay';
        document.body.appendChild(overlay);

        let popup = document.createElement('div');
        popup.className = 'popup-img-container';

        if(img.alt !== null){
            let imgHeading = document.createElement('h3');
            let headingText = document.createTextNode(img.alt);
            imgHeading.appendChild(headingText);
            popup.appendChild(imgHeading);
        }

        let popupImg = document.createElement('img');
        popupImg.src = img.src;
        popup.appendChild(popupImg);
        document.body.appendChild(popup);

        let closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        let closeButttonText = document.createTextNode('X');
        closeButton.appendChild(closeButttonText);
        popup.appendChild(closeButton);
    })
})
/*** CLOSING THE POP UP ***/
document.addEventListener('click' , e =>{
    if (e.target.className == 'close-button'){
       e.target.parentNode.remove();
       document.querySelector('.transparent-overlay').remove();
    }
})
/************************************************************************/
let allBullets = document.querySelectorAll('.nav-bullet .bullet');
let allLinks = document.querySelectorAll('.links a');

function navigateTo(element){
    element.forEach(ele => {

        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
navigateTo(allBullets);
navigateTo(allLinks);
/***************** REMOVING PLACEHOLDER WHEN ONFOCUS ***********************/
let myInput = document.querySelectorAll('form input , form textarea');

myInput.forEach(input =>{
    input.onfocus = function() {
        input.setAttribute('data' , input.getAttribute('placeholder'));
        input.setAttribute('placeholder' , '');
    }

    input.onblur = function() {
        input.setAttribute('placeholder' , input.getAttribute('data'));
        input.setAttribute('data' , '')
    }
})