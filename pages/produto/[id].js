import Head from 'next/head';
import { useRouter } from 'next/router'
//import styles from '../styles/Home.module.css';
//import produtos from '../dados/produtos.json'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function id() {

  const { data, error } = useSWR('/api/cadastrar', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const router = useRouter()
  const id = router.query.id 
  
  console.log(data)

  const filtred = data.filter((i)=>{
        return i.nome.indexOf(id) > -1
      
  })

  console.log(filtred)

  return (
    <div>
      <Head>
        <title>Apioneira</title>
      </Head>
      <h1>{id}</h1>
      {filtred.map((i,n)=>(
        <p>{i.descricao}</p>
      ))}
      
    </div>
  )
}