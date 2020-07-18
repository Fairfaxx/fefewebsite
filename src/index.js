import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './index.css'
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import Button from './components/Button';



class App extends React.Component {

    render(){
        
        return(
            <div>
                <Navbar />
                <Header />
                <Main 
                    textH3="A year ago I got into this beautiful IT world and my mind was automatically blown. I started with digital marketing but it wasn’t quite my thing. I then discovered what coding was and I became fascinated, starting a path I could not leave. I am passionate about the digital product development process and my goal is simple: to become a better developer. I am looking forward to working surrounded by team-mates from whom I can learn and discover new things everyday."
                    img="https://unsplash.com/photos/GkFQEOubrCo"
                />
                <Footer />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));