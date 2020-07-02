import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './fichaDePersonal.css'

export default class fichaDePersonal extends Component {
    render() {
        return (
            <div>
                <div id="main-container">

                    <table>
                        <thead>
                            <tr>
                                <th>nombres</th><th>cedula</th><th>sueldo</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>javier</td><td>12345</td><td>$ 4,000</td>
                        </tr>
                        <tr>
                            <td>giovanni</td><td>123456</td><td>$ 3,500</td>
                        </tr>
                        <tr>
                            <td>maria</td><td>123458</td><td>$ 1,100</td>
                        </tr>
                        <tr>
                            <td>mariat</td><td>123458</td><td>$ 450</td>
                        </tr>
                    </table>
                    <Link to={{
                        pathname: `nomina`,

                    }}>
                        <button className="btn-borrar  btn btn-primary">


                            Atras
                                    </button>
                    </Link>
                </div>


            </div>

        )
    }
}
