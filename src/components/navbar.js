import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default class navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <div className="dropdown">
                    <button className="dropbtn">archivo
                <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">respaldo de datos</a>
                        <a href="#">recuperacion de datos</a>
                        <a href="#">impresora</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">datos
                <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to={`/fichadepersonal`} className="navbar-brand" href="#" >


                            ficha de personal

</Link>
                        <a href="#">asignacion y deduccion</a>
                        <a href="#">Prestamo</a>
                    </div>
                </div>
                <a href="#">ejemplo 1</a>
                <a href="#">ejemplo 2</a>
                <a href="#">ejemplo 3</a>
            </div>
        )
    }
}
