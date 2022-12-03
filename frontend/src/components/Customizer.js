import React, { useState } from 'react'
import Dashboard1 from './Dashboards/DashBoard1/Dashboard1';

const Customizer = () => {
  
    const fontList = ['Montserrat', 'Roboto', 'Nunito']
    const [selFont, setSelFont] = useState("Roboto");

    return (
    <div>
        <header>
            <select onChange={e => setSelFont(e.target.value)} value={selFont}>
                {fontList.map(fontName => (

                <option value={fontName}>{fontName}</option>
                ))}
            </select>
        </header>
        <Dashboard1 cFontFamily={selFont}/>
    </div>
  )
}

export default Customizer