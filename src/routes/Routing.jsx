import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/projects/Projects';
import ProjectDetails from '../pages/projects/ProjectDetails/ProjectDetails';
import { useEffect } from 'react';

function Routing() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);       
    }, [pathname]);
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>  
            <Route path='/skills' element={<Skills />}></Route>  
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/projects/:id' element={<ProjectDetails />}></Route>  
        </Routes>
    )
}

export default Routing;