import './Nav.scss'
import DarkMode from '../svg/DarkMode';

const Nav = ({getter, setDarkMode}) =>{

    const switchModeBtn = () =>
    {
        console.log("Nav", getter);
        setDarkMode((state) => !state)
    }
    return(
        <nav className='navbar'>
            <a className='logo' href="#">JS.</a>
            <div className='nav_list_wrapper'>
                <ul>
                    <li>
                        <a href="#">projects</a>
                    </li>
                    <li>
                        <a href="#">skills</a>
                    </li>
                    <li>
                        <a href="#">contact</a>
                    </li>
                </ul>
                <div onClick={switchModeBtn}>
                    <DarkMode/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;