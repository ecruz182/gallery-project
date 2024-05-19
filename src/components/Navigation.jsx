import React from 'react'
import { Link } from 'react-router-dom'
import Cmadrid from './Cmadrid'
import Cmadrid2 from './Cmadrid2'
import Cmadrid3 from './Cmadrid3'
import Cmadrid4 from './Cmadrid4'
import Cmadrid5 from './Cmadrid5'

const Navigation = () => {
  return (
    <div>
        <Link to="/madrid1">
            <figure>
                <Cmadrid/>
                <figcaption>madrid1</figcaption>
            </figure>
        </Link>
        <Link to="/madrid2">
            <figure>
                <Cmadrid2/>
                <figcaption>madrid2</figcaption>
            </figure>
        </Link>
        <Link to="/madrid3">
            <figure>
                <Cmadrid3/>
                <figcaption>madrid3</figcaption>
            </figure>
        </Link>
        <Link to="/madrid4">
            <figure>
                <Cmadrid4/>
                <figcaption>madrid4</figcaption>
            </figure>
        </Link>
        <Link to="/madrid5">
            <figure>
                <Cmadrid5/>
                <figcaption>madrid5</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation
