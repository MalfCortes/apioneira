import styles from '../styles/destaque.module.css'
import produtos from '../dados/produtos.json'


export default function destaque() {

  const imgfake = "http://apioneiratintas.com.br/images/logo.png"

  const filtro = produtos.filter(i=>{
    return i.destaque
  })
  
    return (
  <div className={styles.container}>
    <h1>Items em destaque</h1>
    
    <div className={styles.grid}>
    {filtro.map((i)=>(
      <div className={styles.card}>
        <img src={i.url === "" ? imgfake : i.url} alt="i.descricao"  />
        <p>{i.descricao}</p>
        <p>R$  {i.preco}</p>
      </div>
    ))}
    </div>
  </div>
  )
}