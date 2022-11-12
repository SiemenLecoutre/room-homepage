import { useState } from 'react'
import '../../style/Navbar.css'
import hamburgerMenu from '../../images/icon-hamburger.svg'
import closeIcon from '../../images/icon-close.svg'


function Navbar() {
    const [showMenu, setShowMenu] = useState(false)


    return <>
        <nav>
            <ul>
                <li><button onClick={() => setShowMenu((prevState) => !prevState)} className='hamburger'><img src={hamburgerMenu} alt="hamburger menu" /></button></li>
                <li><a href='/'>room</a></li>
                {showMenu && <div className='menu'>
                    <li><button onClick={(prevValue) => setShowMenu(!prevValue)} className='close'><img src={closeIcon} alt="close icon" /></button></li>
                    <li><a href='/'>home</a></li>
                    <li><a href='#'>shop</a></li>
                    <li><a href='#'>about</a></li>
                    <li><a href='#'>contact</a></li>
                </div>}


            </ul>
        </nav>

    </>
}

export default Navbar