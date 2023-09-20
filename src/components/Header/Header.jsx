import './Header.css';
import senbay_logo from '../../assets/images/senbay_logo.svg';
import senbay_logo_dark from '../../assets/images/bayburt_logo_dark.svg';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { modeSliceActions } from '../../store/mode-slice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import close from '../../assets/images/close.png';
import close_dark from '../../assets/images/close-dark.png';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [showDrop,setShowDrop] = useState(false);

    const isDarkMode = useSelector(state => state.modeReducer.mode);
    const dispatch = useDispatch();

    const handleDarkMode = () => {
        window.localStorage.setItem('mode', 'dark');
        dispatch(modeSliceActions.switchDark('dark'));
    };

    const handleLightMode = () => {
        window.localStorage.setItem('mode', 'light');
        dispatch(modeSliceActions.switchDark('light'));
    };

    const handleMenuBar = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    const handleShowDropdown = () => {
        setShowDrop(true);
    };

    const handleHideDropdown = () => {
        setShowDrop(false);
    };
    
    return (
        <header className='container'>
            <div className='header-logo'>
                <Link to='/'><img src={isDarkMode === 'dark' ? senbay_logo_dark : senbay_logo} alt="senbay-logo" /></Link>
            </div>
            <div className={isMenuOpen ? 'd-none' : 'dark-light-wrap'}>
                <div onClick={handleLightMode} className={isDarkMode === 'dark' ? 'light-icon' : 'light-icon mode-active'}>
                    <FiSun />
                </div>
                <div onClick={handleDarkMode} className={isDarkMode === 'dark' ? 'dark-icon mode-active' : 'dark-icon'}>
                    <BsMoon />
                </div>
            </div>
            <div className='open-menu-link'>
                {/* {isMenuOpen && <ul className={isDarkMode === 'dark' && 'open-menu-ul'}>
                <div className='close-icon' onClick={handleCloseMenu}>
                    <img src={isDarkMode === 'dark' ? close_dark : close} alt="close" />
                </div>
                <div className='dark-light-wrap mobile-dark-light'>
                    <div onClick={handleLightMode} className={isDarkMode === 'dark' ? 'light-icon' : 'light-icon mode-active'}>
                        <FiSun />
                    </div>
                    <div onClick={handleDarkMode} className={isDarkMode === 'dark' ? 'dark-icon mode-active' : 'dark-icon'}>
                        <BsMoon />
                    </div>
                </div>
                    <li>
                        <Link onClick={handleCloseMenu} to="/">
                            ƏSAS SƏHİFƏ
                        </Link>
                    </li>
                    <li className='about-li-wrap' onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
                        <div className="about-div" to="/about/history">
                            HAQQIMIZDA
                        </div>
                        {showDrop && (
                            <li className='about-dropdown'>
                                <div>
                                    <Link onClick={handleCloseMenu} to="/about/history">
                                        TARİXÇƏ
                                    </Link>
                                    <Link onClick={handleCloseMenu} to="/about/mission">
                                        MİSSİYA VƏ VİZYON
                                    </Link>
                                    <Link onClick={handleCloseMenu} to="/about/politics">
                                        ŞİRKƏT SİYASƏTİMİZ
                                    </Link>
                                </div>
                                <div>
                                    <Link onClick={handleCloseMenu} to="/about/directors-board">
                                        İDARƏ HEYƏTİ
                                    </Link>
                                    <Link onClick={handleCloseMenu} to="/">
                                        RƏHBƏRİN MESAJI
                                    </Link>
                                    <Link onClick={handleCloseMenu} to="/">
                                        QRUP ŞİRKƏTLƏRİ
                                    </Link>
                                </div>
                                <div>
                                    <Link onClick={handleCloseMenu} to="/about/awards">
                                        MÜKAFAT VƏ UĞURLAR
                                    </Link>
                                    <Link onClick={handleCloseMenu} to="/about/certificat">
                                        ÜZVLÜK VƏ SERTİFİKATLAR
                                    </Link>
                                    <Link onClick={handleCloseMenu} to="/about/founder">
                                        QURUCULARIMIZ
                                    </Link>
                                </div>
                            </li>
                        )}
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} to="/">
                            FƏALİYYƏT SAHƏLƏRİ
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} to="/projects">
                            LAYİHƏLƏR
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} to="/">
                            SOSİAL MƏSULİYYƏT
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} to="/news">
                            XƏBƏRLƏR
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} to="/contact">
                            ƏLAQƏ
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} to="/">
                            AZ
                        </Link>
                    </li>
                </ul>} */}
                <div className='desktop-menu-bar'>
                    <div className='desktop-navbar-top'>
                        <ul>
                            <li>
                                <Link to='/'>
                                    ƏSAS SƏHİFƏ
                                    <MdKeyboardArrowRight />
                                </Link>
                            </li>
                            <div className='desktop-about-wrap'>
                                <li className='desktop-about-li' onClick={handleShowDropdown}>
                                    <div>
                                        HAQQIMIZDA
                                        <MdKeyboardArrowRight />
                                    </div>
                                </li>
                                {showDrop && (
                                    <div className='desktop-dropdown-menu'>
                                        <Link to="/about/history">TARIXÇƏ</Link>
                                        <Link to="/about/mission">MİSSİYA VƏ VİZYON</Link>
                                        <Link to="/about/politics">ŞİRKƏT SİYASƏTİMİZ</Link>
                                        <Link to="/about/directors-board">İDARƏ HEYƏTİ</Link>
                                        <Link to="/">RƏHBƏRİN MESAJI</Link>
                                        <Link to="/">QRUP ŞİRKƏTLƏRİ</Link>
                                        <Link to="/about/award">MÜKAFAT VƏ UĞURLAR</Link>
                                        <Link to="/about/certificat">ÜZVLÜK VƏ SERTİFİKATLAR</Link>
                                        <Link to="/about/founder">QURUCULARIMIZ</Link>
                                    </div>
                                )}
                            </div>
                            <li>
                                <Link to='/activity'>
                                    FƏALİYYƏT SAHƏLƏRİ
                                    <MdKeyboardArrowRight />
                                </Link>
                            </li>
                            <li>
                                <Link to='/projects'>
                                    LAYİHƏLƏR
                                    <MdKeyboardArrowRight />
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    SOSİAL MƏSULİYYƏT
                                    <MdKeyboardArrowRight />
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <span>
                                <SlLocationPin />
                                Anıttepe Məh. Işık küç. No: 20 Çankaya/Ankara
                            </span>
                            <span>
                                <BiPhone />
                                +90(312) 229 08 08
                            </span>
                            <span>
                                <BiPhone />
                                +90(312) 229 00 10
                            </span>
                            <span>
                                <AiOutlineMail />
                                info@bayburtgrup.com.tr
                            </span>
                        </div>
                    </div>
                    <div className='desktop-navbar-bottom'>
                        <img src={senbay_logo} alt="senbay-logo" />
                        <Link to="/contact">
                            <p>ƏLAQƏ</p>  
                            <MdKeyboardArrowRight />
                        </Link>
                    </div>
                </div>
                <div className={(isDarkMode === 'light' && isMenuOpen) ? 'menu-icon active-menu-icon' : 'menu-icon'} onClick={handleMenuBar}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;