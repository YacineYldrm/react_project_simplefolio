import Header from './../components/Header/Header'
import Main from './../components/Main/Main'
import Footer from './../components/Footer/Footer'
import { useState } from 'react'

const Home = () => {

    const [darkMode, setDarkMode] = useState(true);
    console.log(darkMode);

    return ( 
        <>
        <div className={darkMode ? "darkModeOn" : "darkModeOff"}>
            <Header setDarkMode={setDarkMode}/>
            <Main />
            <Footer />
        </div>
        </>
    );
}

export default Home;