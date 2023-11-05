import './style/normalize.css';
import './style/base.css';
import './fonts/fontawesome-free-6.4.2-web/css/all.min.css';

import root, { addScrollEvents } from './javascript/root.js';
import home, { handleSlideShow } from './javascript/home.js';


async function render(context){

    let content = document.getElementById('content');

    content.innerHTML = root(context);

    // add events
    const navLinks = document.querySelectorAll('.nav__item-link');

    navLinks.forEach(link => {
        link.onclick = function(){
            switch(link.dataset.content){
                case 'about': {
                    import('./javascript/about.js').then(about => render(about.default));
                    break;
                }
                case 'menu': {
                    import('./javascript/menu.js').then(menu => render(menu.default));
                    break;
                }
                case 'career': {
                    import('./javascript/career.js').then(career => render(career.default));
                    break;
                }
            }
        }
    })

    const navLogo = document.querySelector('.nav-logo');

    navLogo.onclick = function(){
        initalLoading();
    };

    addScrollEvents();
}

function initalLoading(){
    render(home);
    handleSlideShow();
}

initalLoading();
