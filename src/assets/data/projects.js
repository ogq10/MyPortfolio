import {v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.jpg'

const projects = [
    {
        id: uuidv4(), 
        name: 'smoking man', 
        desc: 
        'this man is smoking', 
        img: ProjectImg, 
    }, 
    {
        id: uuidv4(), 
        name: 'smoking man1', 
        desc: 
        'this man is smoking 1 ', 
        img: ProjectImg, 
    }, 
    {
        id: uuidv4(), 
        name: 'smoking man2', 
        desc: 
        'this man is smoking 2 ', 
        img: ProjectImg, 
    }, 
    {
        id: uuidv4(), 
        name: 'smoking man3', 
        desc: 
        'this man is smoking 3 ', 
        img: ProjectImg, 
    }, 

]
export default projects; 