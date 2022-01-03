
/* Animaciones entrada */
require('./style.min.css');
import { router } from './../../route/index.router';

//listener para los hashlocationa
window.location.hash = window.location.hash || '#/';
router(window.location.hash);

window.addEventListener('hashchange', () => {
    router(window.location.hash);
    /*if (window.location.hash === '#/markets') {
        
    }
    if (window.location.hash == '#/api' || window.location.hash == '#/api/documentation') {
        

    } else {
        

    }
    if (window.location.hash == '#/api/documentation') {
        
    }*/
})