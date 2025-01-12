import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>  
            <Route path='/skills' element={<Home />}></Route>  
            <Route path='/projects' element={<Home />}></Route>  
        </Routes>
    )
}

export default Routing;