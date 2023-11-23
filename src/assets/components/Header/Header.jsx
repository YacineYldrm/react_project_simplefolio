import Button from '../Button/Button'
import './Header.css'

const Header = () =>{
    return(
        <header className='headerContainer'>
            <h1>Hi, I am <span>John Smith.</span></h1>
            <h2>A Front End Developer.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam praesentium porro nemo? Officiis suscipit aut unde architecto velit accusamus nesciunt sed eveniet voluptatum, facere quae earum inventore cupiditate non sequi!</p>
            <Button 
                buttonText="resume"/>
        </header>
    )
}

export default Header