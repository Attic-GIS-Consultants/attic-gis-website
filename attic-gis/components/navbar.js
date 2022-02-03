import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Typography } from '@mui/material'
export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles.deskMenu}>
                <div className={styles.leftSide} >
                    <Typography variant='h4' style={{ fontStyle: 'bold', fontWeight: '600' }}>
                        ATTIC
                    </Typography>
                </div>
                <div className={styles.rightSide}>
                    <Link href="/">
                        <a><Typography varint="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}> Home</Typography></a>
                    </Link>
                    <Link href="/products">
                        <a><Typography varint="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}>Products</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a><Typography varint="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}> Contacts</Typography></a>
                    </Link>
                </div>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    <Typography variant='h4' style={{ fontStyle: 'bold', fontWeight: '600' }}  >
                        ATTIC
                    </Typography>
                    <div
                        className={styles.menuIcon}
                        onClick={() => {
                            setClicked(!clicked);
                        }}
                    >
                        {clicked ? <FaTimes size={20}/> : <FaBars size={25} color="#343434" />}
                    </div>
                </div>
                <ul className={clicked ? styles.active : styles.normal}>
                    <Link href="/">
                        <a><Typography varint="body1" style={{ fontStyle: 'bold', fontWeight: '500',marginTop:'5px' }}> Home</Typography></a>
                    </Link>
                    <Link href="/products">
                        <a><Typography varint="body1" style={{ fontStyle: 'bold', fontWeight: '500',marginTop:'5px' }}>Products</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a><Typography varint="body1" style={{ fontStyle: 'bold', fontWeight: '500',marginTop:'5px' }}> Contacts</Typography></a>
                    </Link>
                </ul>

            </div>

        </nav>
    )
}

