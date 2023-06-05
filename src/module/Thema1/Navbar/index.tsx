"use client"
import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import logo1 from '../../../assets/Image/ex1.webp'
import '../../../app/globals.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

type dataNavList = {
    name: string,
    to: string,
}

export interface IAppProps {
}

function Navbar(props: IAppProps) {
    const [navActive, setNavActive] = useState('New Arrival')
    const [navList, setNavList] = useState<dataNavList[]>([
        {
            name: "New Arrival",
            to: 'New Arrival'
        },
        {
            name: "Cloathing",
            to: 'Cloathing'
        },
        {
            name: "Shoes",
            to: 'Shoes'
        },
        {
            name: "Bags",
            to: 'Bags'
        },
        {
            name: "Accsesoris",
            to: 'Accsesoris'
        },
        {
            name: "Sale",
            to: 'Sale'
        },
        {
            name: "Men",
            to: 'Men'
        }
    ])

    return (
        <nav className='navbar'>
            <div className='navListWrapper'>
                {
                    navList.map((item: dataNavList, index: number) => {
                        return (
                            navActive === item.name ?
                                <Link className='navListNameActive'
                                    onSetActive={() => setNavActive(item.to)}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={900}>
                                    {item.name}
                                </Link>
                                :
                                <Link className='navListNameInactive'
                                    onSetActive={() => setNavActive(item.to)}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={900}>
                                    {item.name}
                                </Link>
                        )
                    })
                }
                <input type={'text'}/>
            </div>
        </nav>
    );
}

export default Navbar