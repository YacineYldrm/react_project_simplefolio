import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <article className="projectCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div>
                <p>{props.toolOne}</p>
                <p>{props.toolTwo}</p>
                <p>{props.toolThree}</p>
            </div>
        </article> 
    )
}

export default ProjectCard