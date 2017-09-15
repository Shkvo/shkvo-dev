import React, {Component} from 'react';
import logo from './svg/Shkvo.svg';
import './css/Header.css';
import { Link } from 'react-router-dom';
import f from './svg/f.svg';
import g from './svg/g+.svg';
import vk from './svg/vk.svg';
import lIn from './svg/in.svg'; 
import menu from './svg/menu.svg';


class Header extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visible: false
        }
    }

    handleClick(e){
        this.setState({
            visible: !this.state.visible
        })
    }

    componentDidMount(){

    }

    render(){
        return (
            <header>
                <div onClick={this.handleClick} className="menu header-el">
                    <img src={menu} alt="menu"/>
                </div>
                <nav className={this.state.visible ? "navigation__visible" : "navigation"}>
                    <Link className="navigation__home" to="/">Home</Link>
                    <Link className="navigation__projects" to="/projects">Projects</Link>
                    <Link className="navigation__contact" to="/contact">Contact</Link>
                </nav>
                <object className="logo" id="f1" data={logo} type="image/svg+xml" aria-label="logo"></object>
                <div className="socials">
                    <a className="linkedin" target="_blanc" href="https://www.linkedin.com/in/shkvo/">
                        <img src={lIn} alt="linkedin"/>
                    </a>
                    <a className="facebook" target="_blanc" href="https://www.facebook.com/dima.shkvo">
                        <img src={f} alt="facebook" />
                    </a>
                    <a className="vk" target="_blanc" href="https://vk.com/shkvoo">
                        <img src={vk} alt="vk" />
                    </a>
                    <a className="google" target="_blanc" href="https://plus.google.com/u/1/101098979884832608778">
                        <img src={g} alt="google+" />
                    </a>
                </div>
            </header>
        )
    }
    
}
    

export default Header;