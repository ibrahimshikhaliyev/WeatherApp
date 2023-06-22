import { useEffect,useRef } from 'react';

import {FaMoon,FaSun} from 'react-icons/fa';

import '../../styles/ToggleThemeBtn.scss';

const ToggleThemeBtn=({onChangeTheme})=>{

    const checkboxRef=useRef(null);

    useEffect(()=>{
        let localDarkTheme=localStorage.getItem('darkTheme');
        if(localDarkTheme !==null){
            localDarkTheme=localStorage.getItem('darkTheme')==='true' ? true:false;
            checkboxRef.current.checked=localDarkTheme;
        }
    },[])

    
    return (
        <div>
            <input 
                type="checkbox" 
                class="checkbox" 
                id="checkbox"
                ref={checkboxRef}
                onChange={e=>{
                    localStorage.setItem('darkTheme',e.target.checked)
                    onChangeTheme(e.target.checked);
                }}

            />
            <label for="checkbox" class="checkbox-label">
                <FaMoon className='toggle_icon'/>
                <FaSun className='toggle_icon'/>
                <span class="ball"></span>
            </label>
        </div>
    )
}

export default ToggleThemeBtn;