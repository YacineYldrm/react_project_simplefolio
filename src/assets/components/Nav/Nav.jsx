import './Nav.scss'

const Nav = () =>{
    return(
        <nav className='navbar'>
            <a href="#">JS.</a>
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
        </nav>
    )
}

export default Nav;