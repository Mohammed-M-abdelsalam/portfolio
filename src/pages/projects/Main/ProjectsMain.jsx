import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './main.css'
import htmlcss from '../../../assets/images/projects/html&css.webp'
import pc from '../../../assets/images/projects/pc.webp'
import js1 from '../../../assets/images/projects/js1.png'
import js1700x2 from '../../../assets/images/projects/js1x2.jpg'
import js2 from '../../../assets/images/projects/js2.jpg'
import js3 from '../../../assets/images/projects/js2.avif'
function ProjectsMain(){
    return(
        <main>
            <Swiper
            className="mySwiper swiper-h"
            spaceBetween={50}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            >
                <SwiperSlide className='container-fluid p-5'>
                    <div className='row row-cols-1 row-cols-md-3 justify-content-around align-items-center'>
                        <div className="content text-start">
                            <p className='fw-bold'>HTML & CSS</p>
                            <h2 className='fs-2 fw-bold'>Explore My Projects & Design</h2>
                            <p>Here you can find a collection of front-end projects I’ve built using pure HTML and CSS.</p>
                            <button className='btn'>Read More</button>
                        </div>
                        <div className='parent py-3'
                        style={{ 
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, auto) minmax(0, auto)',
                            gridTemplateRows: 'minmax(0, auto) minmax(0, auto)',
                            gap: '10px',
                         }}
                        >
                            <div style={{ minHeight: '200px', minWidth: '200px' }}>
                                <img width={'100%'} src={htmlcss} alt="" />
                            </div>
                            <div style={{ minHeight: '200px', minWidth: '200px' }}>
                                <img width={'100%'} src={pc} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <Swiper
                    className="mySwiper2 swiper-v"
                    direction={'vertical'}
                    spaceBetween={50}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}>
                    <SwiperSlide className='position-relative text-white'>
                    <img src={js1}  srcSet={`${js1} 1700w, ${js1700x2} 5120w`} alt="" />
                    <div className='text-start position-absolute w-75' style={{ maxWidth: '500px', left: '20px', top: '100px' }}>
                        <p className='fw-bold'>JavaScript Projects</p>
                        <h2 className='fs-2 fw-bold py-3'>Explore My JavaScript Projects</h2>
                        <p>
                            JavaScript brings interactivity and dynamic behavior to the web, and in this section, I’ve divided my projects into three core areas that showcase how I use JS to build engaging, functional user experiences.
                        </p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-white'
                        style={{
                            backgroundImage: `url(${js3})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                         }}
                    ></SwiperSlide>
                    <SwiperSlide className='bg-white'
                        style={{
                            backgroundImage: `url(${js2})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                         }}
                    ></SwiperSlide>
                </Swiper>
                </SwiperSlide>
                <SwiperSlide>Horizontal Slide 3</SwiperSlide>
            </Swiper>
        </main>
    )
}

export default ProjectsMain;