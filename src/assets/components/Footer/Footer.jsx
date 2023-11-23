import Button from '../Button/Button';
import './Footer.css'

const Footer = () => {
    return ( 
        <footer className='footerContainer'>
            <h2>CONTACT</h2>
            <Button 
            buttonText="email me"/>
            <p>Created by John Smith</p>
        </footer>
    );
}

export default Footer