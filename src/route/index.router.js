import home from './../views/routes/home/home.controller.js';
const content = document.getElementById('root');


const router = (router) => {
    switch (router) {
        case '#/' || '#' || '/' || '':
            try {
                if (content.firstChild) {
                    content.removeChild(content.firstChild);
                }
            } catch (error) {
                console.log(error);
            }

            content.appendChild(home());



            break;

        default:
            alert('404');
            break;
        /*try {
            content.removeChild(content.firstChild);
        } catch (error) {
            console.log(error);
        }
        content.appendChild(notfound());
        break;*/

    }
}

export { router };