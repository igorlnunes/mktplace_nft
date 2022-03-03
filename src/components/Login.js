import styles from "../../styles/Login.module.css";
import Image from "next/image";
import icon from "./Images/logo_web3dev.jpg"
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate, authError } = useMoralis();


  return (
      <div className={styles.login_container}>
        
        <div className={styles.login_card}>
        <div className='text-2xl center text-rgba(108,226,0,255)'>
          Marketplace Web3Dev
        </div>
          <Image src={icon} width={100} height={100}></Image>
          <div className={styles.sign_in_container}>
            {authError && (
              <p className={styles.error}>
                {authError.name}
                {authError.message}
              </p>
            )}
            <button onClick={authenticate}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    )
}

export default Login;
