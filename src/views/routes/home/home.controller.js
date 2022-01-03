import views from './home.html';

// Fecha de finalización del objeto dayjs, los últimos 30 días, incluida la fecha actual, debe restar 29 días de la fecha actual


export default () => {


    const div_Element = document.createElement('div');
    div_Element.classList.add('home');
    div_Element.innerHTML = views;

    return div_Element;

}