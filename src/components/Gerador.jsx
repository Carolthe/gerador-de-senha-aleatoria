import { useState } from "react"

export default function Gerador (){
    const [gerar, setGerar] = useState("")

    function gerarSenhas(){
        setGerar("teste")
    }
    function apagarSenha (){
        setGerar("")
    }
    return(
        <>
        <h1>Gerador de Senha Aleatória</h1>
        <button
        onClick={gerarSenhas}>Gerar</button>
       
        <p>{gerar}</p>
        {gerar &&
         <button onClick={apagarSenha}>Limpar</button>
        }
        </>
    )
}