import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css"
import { useMoralis } from 'react-moralis'
import { useRouter } from "next/router";


export default function Header() {
  const router = useRouter();
  const { logout, isLoggingOut } = useMoralis();

  if (!isLoggingOut) {
    return (
      <header>
        <nav>
          <div className={styles.grid}>
              <ul>
                <Link href={"/"} className={styles.topnav_a} >
                  Home
                </Link>
              </ul>
              <ul>
                <Link href={"/create-item"} className={styles.topnav_a}>
                  Criar NFT
                </Link>
              </ul>
              <ul>
                <Link href={"/my-assets"} className={styles.topnav_a}>
                  Minha Coleção NFT
                </Link>
              </ul>
              <ul>
                <Link href={"/creator-dashboard"} className={styles.topnav_a}>
                  NFTs Criados
                </Link>
              </ul>
              <ul>
                <button onClick={(logout)}>Logout</button>
              </ul>
          </div>
        </nav>
      </header>
    )    
  } else {
    return (
      router.push('/')
    )
  }
}
