import ProjectImg1 from '../Assets/Project1.png';
import ProjectImg2 from '../Assets/Project2.png';
import ProjectImg3 from '../Assets/Project 3.png';
import noCodeImg from '../Assets/NoCode ProjectImg.png';
import MernBlogImg from '../Assets/MernBlogImg.png';
import WeatherAppImg from '../Assets/Project4.png';




const ProjectCardData = [
    {
        imgSrc: ProjectImg3,
        projectTitle: 'MERN STACK CRUD Operation',
        aboutProject: 'This project is built using MongoDB, ExpressJs, ReactJs, and Node.js, with  MongoDB Atlas serving as the cloud - based database for performing Create, Read, Update, and Delete(CRUD) operations',
        url1: 'https://mern-crud-app-sigma.vercel.app/',
        url2: 'https://github.com/Rakesh-99/MERN-CRUD-APP'
    },
    {
        imgSrc: ProjectImg1,
        projectTitle: 'React Portfolio',
        aboutProject: 'My personal portfolio is a showcase of my skills and accomplishments as a web developer.It was built using React, a powerful JavaScript library for building user interface, to create an interactive and visually appealing web presence.',
        url1: 'https://react-personal-portfolio-coral.vercel.app/',
        url2: 'https://github.com/Rakesh-99/React-Personal-Portfolio-'
    },

    {
        imgSrc: MernBlogImg,
        projectTitle: 'MERN STACK blog webapp',
        aboutProject: 'I have created a multi-page MERN Stack blog app using React and Tailwind Css for the front-end, and Node.js, Express Js, and MongoDB for the backend ',
        url1: 'https://rakeshblog.onrender.com/',
        url2: 'https://github.com/Rakesh-99/Blog-App'
    },
    {
        imgSrc: WeatherAppImg,
        projectTitle: 'Weather App using React',
        aboutProject: 'I have developed a React - based weather app that provides real-time information, including current wind speed, atmospheric pressure,humidity, dynamic weather icons, sea level, visibility, city name, and temperature',
        url1: 'https://weather-app-tau-dun.vercel.app/',
        url2: 'https://github.com/Rakesh-99/Weather-App-React'
    },
    {
        imgSrc: noCodeImg,
        projectTitle: 'Bubble No-Code project',
        aboutProject: 'A no-code food-recipe app built using Bubble.io.',
        url1: 'https://recipezone.bubbleapps.io/version-test/auth?v=login',
        url2: '#'
    },
    {
        imgSrc: ProjectImg2,
        projectTitle: 'Cara Clothes',
        aboutProject: 'Cara Clothes is a multi - page eCommerce website with a front-end design crafted using HTML5, CSS3, and JavaScript',
        url1: 'https://rakesh-99.github.io/FrontEnd-Ecommerce-Project/',
        url2: 'https://github.com/Rakesh-99/FrontEnd-Ecommerce-Project'
    },
];








export default ProjectCardData; 
