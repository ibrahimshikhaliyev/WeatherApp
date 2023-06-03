import '../../styles/Navbar.scss';
import { FaGithub} from 'react-icons/fa';


const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="title">Weather App</div>
            <div className='btns-container'>
                <div className="theme_toggle">
                    <div className="wrapper">
                        {/* <input type="checkbox" name="checkbox" className="switch"/> */}
                    </div>
                </div>
                <a href="google.az" className='github_link'><FaGithub/></a>
            </div>
        </div>
    )
}


export default Navbar;