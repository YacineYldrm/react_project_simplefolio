import ProjectsContainer from '../ProjectContainer/ProjectsContainer';
import SkillsContainer from '../SkillsContainer/SkillsContainer';
import './Main.scss'

const Main = () => {
    return ( 
        <main>
            <ProjectsContainer />
            <SkillsContainer />
        </main>
    );
}

export default Main;