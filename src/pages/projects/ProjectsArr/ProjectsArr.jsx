import img1 from '../../../assets/images/projects/projects-imgs/todo-list.png';
import img2 from '../../../assets/images/projects/projects-imgs/bakery.png';
import coursesImg from '../../../assets/images/projects/projects-imgs/courses.png';
import weatherImg from '../../../assets/images/projects/projects-imgs/weather.png';
import gamingWebsiteImg from '../../../assets/images/projects/projects-imgs/gaming-website.png';
import loginImg from '../../../assets/images/projects/projects-imgs/login-system.png';
import crudImg from '../../../assets/images/projects/projects-imgs/crud.png';
import restaurantImg from '../../../assets/images/projects/projects-imgs/restaurant.png';

const ProjectsArr = [
    {id: 1, category: 'js', name: 'toDoList', description: 'a simple toDoList where you can add and delete tasks', img: img1, link: 'https://mohammed-m-abdelsalam.github.io/toDOList/'},
    {id: 2, category: 'html&css', name: 'Bakery', description: 'a bakery page that is responsive for mobile devices and tablets', img: img2, link: 'https://mohammed-m-abdelsalam.github.io/bakery-page/'},
    {id: 3, category: 'js', name: 'weather', description: 'a weather web page that is responsive and interacts with an API to get real-time weather data', img: weatherImg, link: 'https://mohammed-m-abdelsalam.github.io/weather-website/'},
    {id: 4, category: 'js', name: 'courses website', description: 'well designed courses website using html and css only and fully responsive', img: coursesImg, link: 'https://mohammed-m-abdelsalam.github.io/courses-website/'},
    {id: 5, category: 'js', name: 'games website', description: 'a games website where you can check your favorite free games. It is fully responsive and interacts with an API to get real-time game data', img: gamingWebsiteImg, link: 'https://mohammed-m-abdelsalam.github.io/gaming-website/'},
    {id: 6, category: 'js', name: 'login system', description: 'This project is a basic front-end login system designed using HTML, CSS, and JavaScript. It demonstrates how to validate user input (username and password) using regular expressions (regex) without connecting to a back-end server or database.', img: loginImg, link: 'https://mohammed-m-abdelsalam.github.io/login-system-js/'},
    {id: 7, category: 'js', name: 'crud operation', description: "This project is a simple CRUD (Create, Read, Update, Delete) application built entirely with HTML, CSS, and JavaScript, utilizing the browser's Local Storage for data persistence. It allows users to add, view, edit, and delete records, with all changes saved locally on the user's device — no server or database required.", img: crudImg, link: 'https://mohammed-m-abdelsalam.github.io/crud-js/'},
    {id: 8, category: 'html&css', name: 'restaurant web page', description: "This project is a basic, fully static restaurant website built using only HTML and CSS. It features a clean and attractive design that showcases key information about the restaurant, such as its name, menu, about section, contact details, and an inviting landing page. The design focuses on visual appeal and user experience, using CSS for layout, styling, and basic responsiveness. No JavaScript or back-end functionalities are included — the website is purely front-end and intended as a lightweight, fast-loading showcase for a restaurant's brand and offerings.", img: restaurantImg, link: 'https://mohammed-m-abdelsalam.github.io/restaurant-page/'},
]

export default ProjectsArr;