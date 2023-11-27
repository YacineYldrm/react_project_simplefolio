import ProjectCard from "../ProjectCard/ProjectCard";
import './ProjectsContainer.scss'


const ProjectsContainer = () => {
    return (
        <section className="projectsContainer">
            <h2>PROJECTS</h2>
            <div>
                <ProjectCard 
                    title="Project1"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet elit. Nulla, repudiandae!"
                    toolOne="JavaScript"
                    toolTwo="React"
                    toolThree="SASS"
                    />
                <ProjectCard 
                    title="Project2"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet elit. Nulla, repudiandae!"
                    toolOne="JavaScript"
                    toolTwo="React"
                    toolThree="SASS"
                    />
                <ProjectCard 
                    title="Project3"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet elit. Nulla, repudiandae!"
                    toolOne="JavaScript"
                    toolTwo="React"
                    toolThree="SASS"
                    />
            </div>
        </section> 
    
    )
}
 
export default ProjectsContainer;