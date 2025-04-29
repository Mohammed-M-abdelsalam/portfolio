import { useState } from 'react';
import ProjectsArr from '../ProjectsArr/ProjectsArr'; 
import { useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
function ProjectDetails(){
    const {id} = useParams();
    const [projectState] = useState(ProjectsArr.find(project => project.id == id));
    return(
        <section className='container' style={{ minHeight: 'calc(100vh - 100px)' }}>
            <div className="row row-cols-lg-2 g-4 mt-5">
                <div>
                    <div className='rounded-4 overflow-hidden'>
                        <img width={'100%'} src={projectState.img} alt={projectState.description} />
                    </div>
                </div>
                <div>
                    <div className='rounded-4 p-3' style={{ backgroundColor: '#e1eebc' }}>
                        <p>Project Details</p>
                        <h1 className='fw-bold text-capitalize'>{projectState.name}</h1>
                        <p>{projectState.description}</p>
                        <a className='text-decoration-none text-dark border border-1 border-dark rounded-pill py-2 px-4' href={projectState.link} target='_blank'>Demo <FaArrowRight /></a>
                        <div className="tools mt-4">
                            <h3 className='fw-bold'>Tools</h3>
                            <ul className='d-flex gap-5'>
                                {projectState.tools.map((tool, index) => <li key={index}>{tool}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetails