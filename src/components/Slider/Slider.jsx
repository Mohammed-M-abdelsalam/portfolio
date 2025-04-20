import './slider.css';
import { useState } from 'react';
function Slider({arr1, arr2}){
    const [arr1State] = useState(arr1);
    const [arr2State] = useState(arr2);
    if(arr1State.length > 0 && arr2State.length > 0){
        return(
            <div className='container-fluid container-md'>
                {/* slider */}
                <div className="slider mx-auto my-3 overflow-hidden">
                    <div className="slide-track d-flex gap-3">
                        {arr1State.map((item, index) => (
                            <div key={index} className="c rounded-2 d-flex align-items-center justify-content-center flex-shrink-0">
                                <img src={item} width={"50%"} alt="" />
                            </div>
                        ))}
                        {/* Duplicate items */}
                        {arr1State.map((item, index) => (
                            <div key={index} className="c rounded-2 d-flex align-items-center justify-content-center flex-shrink-0">
                                <img src={item} width={"50%"} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* slider reverse */}
                <div className="slider mx-auto overflow-hidden">
                    <div className="slide-track-reverse d-flex gap-3">
                        {arr2State.map((item, index) => (
                            <div key={index} className="c rounded-2 d-flex align-items-center justify-content-center flex-shrink-0">
                                <img src={item} width={"50%"} alt="" />
                            </div>
                        ))}
                        {/* Duplicate items */}
                        {arr2State.map((item, index) => (
                            <div key={index} className="c rounded-2 d-flex align-items-center justify-content-center flex-shrink-0">
                                <img src={item} width={"50%"} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider