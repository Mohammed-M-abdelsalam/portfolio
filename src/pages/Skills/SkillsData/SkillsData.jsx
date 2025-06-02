import './skills-data.css'
function SkillsData() {
    const skills = [
        {name: 'HTML', value: 100},
        {name: 'CSS', value: 90},
        {name: 'JavaScript', value: 95},
        {name: 'React', value: 95},
        {name: 'tailwind', value: 95},
        {name: 'Bootstrap', value: 90},
        {name: 'sass', value: 90},
        {name: 'git & github', value: 90},
    ];
    return (
        <section className="container skills-data mb-0 mt-5 mb-lg-5 pt-5">
            <h2 className='skills-title position-relative' style={{width: 'fit-content'}}>My Skills</h2>
            <div className='row row-cols-lg-2 g-5 mt-0 p-5'>
                {
                    skills.map((skill, index) => (
                        <div className="skill d-flex flex-column my-3" key={index}>
                            <div className="d-flex justify-content-between align-items-end">
                                <h3 className='fs-6 m-0'>{skill.name}</h3>
                                <p className='m-0'>{skill.value}%</p>
                            </div>
                            <progress className="w-100" value={skill.value} max="100"></progress>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SkillsData;