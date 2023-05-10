import React from "react";

function Tile({children, title, image, imagetag}){
    return (
        <section>
            <img src={image} alt={imagetag}/>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Tile;