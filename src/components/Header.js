import React from 'react';

const style = {
    color: "#2b2b2b",
    backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    padding: '10px'
}

const Header = (props) => {
    return (
        <div style={style}>
        <h2>{props.title}</h2>
    </div>
    );
}

export default Header;
