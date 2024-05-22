import React from 'react'
import { Link } from 'react-router-dom'
import Cmadrid from './Cmadrid'
import Cmadrid2 from './Cmadrid2'
import Cmadrid3 from './Cmadrid3'
import Cmadrid4 from './Cmadrid4'
import Cmadrid5 from './Cmadrid5'
import Cmadrid6 from './Cmadrid6'
import Cmadrid7 from './Cmadrid7'
import Cmadrid8 from './Cmadrid8'
import Cmadrid9 from './Cmadrid9'

const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to="/madrid1" className="links">
            <figure className="image-size">
                <Cmadrid/>
                <figcaption>madrid1</figcaption>
            </figure>
        </Link>
        <Link to="/madrid2" className="links">
            <figure className="image-size">
                <Cmadrid2/>
                <figcaption>madrid2</figcaption>
            </figure>
        </Link>
        <Link to="/madrid3" className="links">
            <figure className="image-size">
                <Cmadrid3/>
                <figcaption>madrid3</figcaption>
            </figure>
        </Link>
        <Link to="/madrid4" className="links">
            <figure className="image-size">
                <Cmadrid4/>
                <figcaption>madrid4</figcaption>
            </figure>
        </Link>
        <Link to="/madrid5" className="links">
            <figure className="image-size">
                <Cmadrid5/>
                <figcaption>madrid5</figcaption>
            </figure>
        </Link>
        <Link to="/madrid6" className="links">
            <figure className="image-size">
                <Cmadrid6/>
                <figcaption>madrid6</figcaption>
            </figure>
        </Link>
        <Link to="/madrid7" className="links">
            <figure className="image-size">
                <Cmadrid7/>
                <figcaption>madrid7</figcaption>
            </figure>
        </Link>
        <Link to="/madrid8" className="links">
            <figure className="image-size">
                <Cmadrid8/>
                <figcaption>madrid8</figcaption>
            </figure>
        </Link>
        <Link to="/madrid9" className="links">
            <figure className="image-size">
                <Cmadrid9/>
                <figcaption>madrid9</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation
