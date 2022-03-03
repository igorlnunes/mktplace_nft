import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css"
import { useMoralis } from 'react-moralis'


export default function Header() {
  const { logout } = useMoralis();
  return (
    <header>
      <nav>
        <div className={styles.grid}>
            <ul>
              <Link href={"/"} className={styles.topnav_a} className='flex-center p-6'>
                Home
              </Link>
            </ul>
            <ul>
              <Link href={"/create-item"} className={styles.topnav_a} className='flex-center p-6'>
                Criar NFT
              </Link>
            </ul>
            <ul>
              <Link href={"/my-assets"} className={styles.topnav_a} className='flex-center p-6'>
                Minha Coleção NFT
              </Link>
            </ul>
            <ul>
              <Link href={"/creator-dashboard"} className={styles.topnav_a} className='flex-center p-6'>
                NFTs Criados
              </Link>
            </ul>
            <ul>
              <button onClick={logout}>Logout</button>
            </ul>
        </div>
      </nav>
    </header>
  );
}
