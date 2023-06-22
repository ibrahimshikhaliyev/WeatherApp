import { useState } from 'react';

import '../../styles/ToggleBtn.scss';
import { useEffect } from 'react';


const ToggleBtn=({onHandleTemChange,darkTheme})=>{
    const [measure,setMeasure]=useState('C');
    
    useEffect(e=>{
        onHandleTemChange(measure);
    })

    return (
        <>
            <input 
                id="toggle" 
                class={`toggle ${darkTheme?'toggle_dark':null} `} 
                type="checkbox" 
                role="switch" 
                name="toggle" 
                value="on" 
                onChange={e=>{
                    if(measure==='C'){
                        setMeasure('F')

                    }else{
                        setMeasure('C')

                    }
                }}
            />
            <label for="toggle" class="slot">
                <span class={`slot__label  ${darkTheme?'slot__label_dark':null}`}>C°</span>
                <span class={`slot__label  ${darkTheme?'slot__label_dark':null}`}>F°</span>
            </label>
            <div class="curtain"></div>
        </>
        
    )
}

export default ToggleBtn;