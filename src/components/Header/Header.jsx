import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import './Header.scss'
import GitHub from '../svg/GitHub'
import LinkedIn from '../svg/LinkedIn'

const Header = ({setDarkMode}) =>{
    return(
        <header className='headerContainer'>
            <Nav setDarkMode={setDarkMode}/>
            <h1>Hi, I am <span>John Smith.</span></h1>
            <h2>A Front End Developer.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam praesentium porro nemo? Officiis suscipit aut unde architecto velit accusamus nesciunt sed eveniet voluptatum, facere quae earum inventore cupiditate non sequi!</p>
            <div className='social-media_icons_wrapper'>
                <Button 
                    buttonText="resume"/>
                <GitHub/>
                <LinkedIn/>
            </div>
        </header>
    )
}

export default Header