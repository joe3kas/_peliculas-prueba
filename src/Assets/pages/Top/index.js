import React from 'react'
import PeliculasT from '../../Components/PeliculasT'

export default function Top() {
    return (
        <div className="container">
            <div className="busqueda row">
                    <div className="col-8">
                        <input className="form-control m" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            <br/>
                    <h4 className="titulos">Top Rated</h4>
                    <PeliculasT/>
                    <br/>
        </div>
    )
}
