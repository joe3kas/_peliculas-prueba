import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="n nav-item">
              <a className="nav-link" href="/"><img src="../Images/perfil.jpg"  alt="/"/> Emilia Clarke<span className="sr-only">(current)</span></a>
              </li>
              <li className="n nav-item">
              <a className="nav-link" href="/">Salir</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
