import { useState } from 'react';
import CardImg from '../../../components/CardImg/CardImg';
import ProjectsArr from '../ProjectsArr/ProjectsArr';
import './projects-section.css';
function ProjectsSection(){
    const [projectsState, setProjectsState] = useState(ProjectsArr);
    const [activeCategory, setActiveCategory] = useState('All');
    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === 'all') {
            setProjectsState(ProjectsArr);
        } else {
            const filteredProjects = ProjectsArr.filter(project => project.category === category);
            setProjectsState(filteredProjects);
        }
    }
    return (
        <section className="projects-section container-fluid text-white py-5">
            <div className="row">
                <aside className="col-4 col-md-2 ps-0 py-5">
                    <ul className="list-group list-group-flush text-center d-flex flex-column gap-2">
                        <li><button onClick={() => handleCategoryClick('all')}  className={"imgcard-btn btn rounded-start-0" + (activeCategory === 'all' ? 'active' : '')}>All</button></li>
                        <li><button onClick={() => handleCategoryClick('html&css')} className={"imgcard-btn btn px-0 rounded-start-0" + (activeCategory === 'html&css' ? 'active' : '')}>HTML&CSS</button></li>
                        <li><button onClick={() => handleCategoryClick('js')} className={"imgcard-btn btn rounded-start-0" + (activeCategory === 'js' ? 'active' : '')}>JS</button></li>
                        <li><button onClick={() => handleCategoryClick('reat')} className={"imgcard-btn btn rounded-start-0" + (activeCategory === 'reat' ? 'active' : '')}>React.js</button></li>
                    </ul>
                </aside>
                <div className="content col-8 col-md-10 row row-cols-1 row-cols-md-3 g-3">
                    {projectsState.map((project) => (
                        <CardImg key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;