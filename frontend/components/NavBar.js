import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/NavBar.module.css'


function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Image src="/logo.svg" alt="logo de la pagina" height="64" width="200" className={styles.navbar_logo}/>
        <ul className={styles.navbar_ul}>
            <li className={styles.navbar_ul_li}><Link href="/">View Tasks</Link></li>
            <li className={styles.navbar_ul_li}><Link href="/new">Create a new Task</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar