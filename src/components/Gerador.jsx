import { useState } from "react"

export default function Gerador (){
    const [gerar, setGerar] = useState("")

    function gerarSenhas(){
        const caracteres = "QWERTYUIOPASDFGHJKLÇZXCVBNM!#$%&?@"
        let newPaddword = ""
        for (let i = 0; i< 12; i++){
            newPaddword += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
        setGerar(newPaddword)
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