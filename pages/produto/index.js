import Destaque from '../../componentes/destaque.js'
import styles from '../../styles/Home.module.css'

export default function Demo() {
  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <Destaque />
    </div>
  )
}

