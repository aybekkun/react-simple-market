import React from 'react'
import "./Header.scss";
import logo from "../../assets/img/logo.svg"
const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className="header__inner">
             <div className='header__logo'>
                <img width={40} src={logo} alt="Logo" />
                <div className='logo__name'>
                    <h2>"Bookie" onlayn dúkanı</h2>
                    <p>Student boldıńız, Sizge usınday futbolka jarasadı!</p>
                </div>
             </div>
            </div>
        </div>
    </header>
  )
}

export default Header