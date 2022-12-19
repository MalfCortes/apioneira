import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react'

export default function Demo() {

const [dado, setdado] = useState('')

  const cadastrar = (e)=>{
    e.preventDefault();
    
    fetch("https://nextjswhnv7p-hxeg--3000.local-credentialless.webcontainer.io/api/cadastrar", {
    method: 'POST',
    body: JSON.stringify({
    title: dado,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  }

  const handleinput = (e) =>{
    const { value } = e.target
    setdado(value)
  }

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
        <form action="" onSubmit={cadastrar}>
          <input type="text" onChange={handleinput} value={dado} />
          <button>Ok</button>
        </form>
      </main>
    </div>
  )
}