import React from "react";
import "../App.css"
import { useState } from "react";
function Inicio(){
    const [opcion, setOpcion] = useState(false);
    return(
<div>
    <html>
        <header>
            <div className="opciones" onClick={()=>setOpcion(true)}></div>
            <img className="logo" src="https://i.pinimg.com/originals/b4/5d/63/b45d63cf9b1bc304c40d02406cf46aeb.png"/>
        </header>
        <body>
            loco
        </body>
        <footer>
            loco
        </footer>
    </html>
</div>
)
}

export default Inicio