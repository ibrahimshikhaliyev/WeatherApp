import ToggleThemeBtn from '../ToggleThemeBtn/ToggleThemeBtn';

import '../../styles/Navbar.scss';
import { FaGithub} from 'react-icons/fa';


const Navbar=({onChangeTheme,darkTheme})=>{
    return (
        <div className={`navbar ${darkTheme?'navbar_dark':null} `}>
            <div className="title">Weather App</div>
            <div className='btns-container'>
                <div className="theme_toggle">
                    <div className="wrapper">
                        <ToggleThemeBtn onChangeTheme={onChangeTheme}/>
                    </div>
                </div>
                <a href="https://github.com/ibrahimshikhaliyev/WeatherApp" target='_blank' rel='noreferrer' className='github_link'><FaGithub/></a>
            </div>
        </div>
    )
}


export default Navbar;