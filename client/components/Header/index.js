import React from 'react'
import Logo from './components/Logo';
import Search from './components/Search';
import { HeaderWrapper } from './styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <Search />
        </HeaderWrapper>
    )
}

export default Header;
