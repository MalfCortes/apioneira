import fs from 'fs'
import dados from '../../dados/produtos.json'

export default (req, res) => {
  let resp = ''
  let dado = '';
  console.log("Inicio - ", req.method)

  if(req.method === "GET"){
    dado = dados;
  }

  if(req.method === "POST"){
    dado = dados
    const status = dado.filter((i)=>{
      if(i.nome.toLowerCase().indexOf(req.body.title.toLowerCase()) > -1){
        return i
      }
        
       
    })  
      if(status.length === 0){
        resp = `item cadastrado - ${req.body.title}`
        dado.push({nome:req.body.title, url:""})
        fs.writeFile("./dados/marcas.json", JSON.stringify(dado), (err)=>{
        console.log(err) 
        
        })    
        }else{
          console.log(`marca ja cadastrado ${req.body.title}`)
          resp = `marca ja cadastrado ${req.body.title}`
        }
  }

    res.status(200).json(dado);
};

