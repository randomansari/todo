import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Nav({navBarItems}) {
    return (
        <div className='nav-container'>{
            navBarItems.map((navBarItem, index)=>{
                return (
                    <Link to='/'  style={{ textDecoration: 'none' }}>
                        <div 
                            className = { navBarItem.selected ? 'selected nav-item' : 'nav-item' }
                            key = {index}>{navBarItem.value}
                        </div>
                    </Link>
                )
            })
        }
        </div>
    )
}

export default Nav;