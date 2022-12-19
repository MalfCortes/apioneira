import Head from 'next/head';
import styles from '../styles/produtos.module.css';
import { useState } from 'react'
import  produtos from '../dados/produtos.json';

export default function Demo() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Cadastro
        </h1>
        <a href="/">Voltar</a>
        
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>
                Descrição
              </th>
              <th>
                Marca
              </th>
              <th>
                Preço
              </th>
              <th>
                Foto
              </th>
              <th>ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((i, n)=>(
              <tr>
                <td>{i.descricao}</td>
                <td>{i.marca}</td>
                <td>R$ {i.preco}</td>
                <td><img  margin="auto" 
                          src={i.url? i.url : "http://www.apioneiratintas.com.br/images/logo.png"} 
                          alt={i.descrição} 
                          width="50px" /></td>
                <td><button>X</button> <button>?</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>
    </div>
  )
}