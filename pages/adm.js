import produtos from '../dados/produtos.json'
import marcas from '../dados/marcas.json'
import styles from '../styles/Adm.module.css'
import { useState } from 'react'


export default function adm() {
  
  const [mostra, setmostra] = useState("0")

  const chave = Object.keys(produtos[0])

  const selectmarca = () =>{

    return(
      <select name="marcas" id="marcas" key="marcas">
         { marcas.map((i,n)=>{
      return(<option value={i.nome} key={i.nome}>{i.nome}</option>)
    })}
      </select>    
    )
  }

const teste = ()=>{
  setmostra("300px")
  console.log(mostra)
}

  return (
    <div className={styles.container}>

    
      <div className={styles.cadastro}>
        <div className={styles.cabeca}>
          <h1>Cadastrar</h1>
          <button onClick={teste}>+</button>
        </div>
          
        <form action="cadastro" styles={{
          heigth: mostra
                  }} >

          {chave.map((i, n)=>(
          i === "marca" ?
          selectmarca()
            :
          <label key={i}>{i}:
          <input type="text"/>
          </label>
        ))}
        <button>ok</button>
        </form>
        
      </div>

      <table className={styles.table}>
       <thead>
         <tr>
           {chave.map((i)=>(
             <th key={i}>{i}</th> 
           ))}
         </tr>
       </thead>
       <tbody>
         {produtos.map((i, n)=>(
           <tr key={n}>
             <td>{i.id}</td>
             <td>{i.descricao}</td>
             <td>{i.marca}</td>
             <td>{i.preco}</td>
             <td> <img src={i.url} alt="" width='50px'/> </td>
             <td>{i.destaque}</td>
           </tr>
         ))}
       </tbody>
      </table>
    </div>
  )
}
