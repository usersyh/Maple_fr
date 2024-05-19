import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {Link, useLocation} from 'react-router-dom';

import SearchBar from './SearchBar';
import logo from '../assets/logo.png';
import MapleIcon from './HeaderMapleIcon';
import useMapleflakeStore from '../store/mapleflakes';


function NavBar() {
  const location = useLocation();
  const [mainPage, setMainPage] = useState(location.pathname === '/home');
  const {change} =  useMapleflakeStore();

  useEffect(() => {
    setMainPage(location.pathname === '/home');
  }, [location.pathname]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" id='navbar'>
       {!mainPage && <Nav.Link as={Link} to='/home' className='navbar-logo logo-padding'>
          <Image className='img-logo img-fluid' src={logo} alt="메이플 로고" rounded />
        </Nav.Link>}
        {mainPage &&  <Nav.Link as={Link} to='/home' className='navbar-logo'>
          <Image className='img-logo img-fluid' src={logo} alt="메이플 로고" rounded />
        </Nav.Link>}
        {!mainPage && <SearchBar size='header'/>}
        <Container id='container'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/totalRanking' id='nav-link'>전체 랭킹</Nav.Link>
            <Nav.Link as={Link} to='/mulungRanking' id='nav-link'>무릉도장 랭킹</Nav.Link>
            <Nav.Link as={Link} to='/catalist' id='nav-link'>카탈리스트 계산기</Nav.Link>
          </Nav>
        </Container>
        {mainPage && 
        <div className='mapleflakes-btn' onClick={change} aria-label='낙엽효과 켜기'>
          <MapleIcon/>
        </div>}
      </Navbar>
    </>
  );
}


export default NavBar;