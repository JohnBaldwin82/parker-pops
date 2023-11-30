import React from 'react';

function Header(props) {
    return (
        <header className='heading'>
            <h1>Parker Pops Co!</h1>
            {props.children}
        </header>
    )
}

export default Header;