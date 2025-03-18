import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>  
            <Route path='/skills' element={<Skills />}></Route>  
            <Route path='/projects' element={<Home />}></Route>  
        </Routes>
    )
}

export default Routing;