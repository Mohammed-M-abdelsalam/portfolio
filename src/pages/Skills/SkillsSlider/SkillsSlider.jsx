import Slider from "../../../components/Slider";

import img1 from '../../../assets/images/skills/css-3-svgrepo-com.png'
import img2 from '../../../assets/images/skills/html-5-svgrepo-com.png'
import img3 from '../../../assets/images/skills/javascript-logo-svgrepo-com.png'
import img4 from '../../../assets/images/skills/react-svgrepo-com.png'
import img5 from '../../../assets/images/skills/sass.png'
import img6 from '../../../assets/images/skills/bootstrap.png'

function SkillsSlider() {
    return (
        <>
            <Slider arr1={[img1, img2, img3, img4, img5, img6]} arr2={[img1, img2, img3, img4, img5, img6]} />
        </>
    );
}

export default SkillsSlider;