import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    return (
        <div>
            <Link to='/adrs'>Car</Link> <br />
            <Link to='/admin/blogs'>Blog</Link>
        </div>
    );
}

export default SideBar;