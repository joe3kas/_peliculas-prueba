import React from 'react'

export default function cardPeliculas({peliculas=[]}) {
    return (
        <div className="row">
            {
                peliculas.map(( items, index ) => (
                    <div key={index} className="col">
                        <div className="card cardalign w-50">
                            <img className="poster" src={items.image} alt={items.name}/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
