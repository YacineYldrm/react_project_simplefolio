import './SkillsContainer.scss'

const SkillsContainer = () => {
    return (
        <section className='skillsContainer'>
            <h2>SKILLS</h2>
            <div>
                <a href="#">HTML</a>
                <a href="#">CSS</a>
                <a href="#" className='item3'>JavaScript</a>
                <a href="#">React</a>
                <a href="#">SASS</a>
                <a href="#" className='item6'>Tailwind CSS</a>
                <a href="#"> Git</a>
                <a href="#">UI/UX</a>
            </div>
        </section>  
    )
}

export default SkillsContainer;