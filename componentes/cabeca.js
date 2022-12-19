import Image from 'next/image'
import styles from '../styles/cabeca.module.css';
import Link from 'next/link'


export default function cabeca() {

  return (
    <div className={styles.container}>
      
      <div className={styles.content}>

      <div className={styles.linha}>
      <img src="http://apioneiratintas.com.br/images/logo.png" alt="Logo" />
        
        <div className={styles.busca}>
          <input type="text" />
          <button>
            Ok
          </button>
          </div>

          <div className={styles.containertel}>
              <div className={styles.tel}>Tel. (62) 3594-1352</div>
              <div className={styles.cel}>Cel. (62) 99995-1539</div>
        </div>
      </div>
      <div className={styles.menu}>
      <ul className={styles.lista}>
            <li>
            <Link href={"/"} as={`/`}>Home</Link>
            </li>
            <li>
            <Link href={"/produto"} as={`/Produtos`}>Produtos</Link>
            </li>
            <li>
            <Link href={"/contato"} as={`/contato`}>Contato</Link>
            </li>
            <li>
            <Link href={"/adm"} as={`/adm`}>Adm</Link>
            </li>
        </ul>  
      </div>

      </div>

       
    </div>

  )
}
