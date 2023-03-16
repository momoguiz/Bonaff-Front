import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Multimédia</h4>
            <ul className="list-unstyled">
              <li>Telephonie</li>
              <li>Audio Visio</li>
              <li>High tech</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Véhicule</h4>
            <ul className="list-unstyled">
              <li>Voitue</li>
              <li>Camion</li>
              <li>Autocar</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Maison</h4>
            <ul className="list-unstyled">
              <li>Empoi</li>
              <li>Culture</li>
              <li>Sport</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BONAFF | All rights reserved |
            Guiz  | Privacy
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
