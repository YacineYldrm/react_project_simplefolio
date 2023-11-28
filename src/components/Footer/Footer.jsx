import Button from '../Button/Button';
import './Footer.scss'

const Footer = () => {
    return ( 
        <footer className='footerContainer'>
            <h2>CONTACT</h2>
            <Button 
            buttonText="email me"/>
            <a href="#" className='created'>Created by John Smith</a>
        </footer>
    );
}

export default Footer