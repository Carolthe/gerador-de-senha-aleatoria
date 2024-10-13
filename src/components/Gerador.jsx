import { useState } from "react"

export default function Gerador (){
    const [gerar, setGerar] = useState("")
    const [inputNumeros, setInputNumeros] = useState (8)

    function gerarSenhas(){
        const caracteres = "QWERTYUIOPASDFGHJKLÇZXCVBNM!#$%&?@"
        let newPaddword = ""
        for (let i = 0; i < inputNumeros; i++){
            newPaddword += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
        setGerar(newPaddword)
    }
    function apagarSenha (){
        setGerar("")
        setInputNumeros("")
    }

    return(
        <>
        <h1>Gerador de Senha Aleatória</h1>
        <input 
        value={inputNumeros}
        onChange={(ev) => setInputNumeros(ev.target.value)}
        type="number"
         />
        <button
        onClick={gerarSenhas}>Gerar {inputNumeros}</button>
       
        <p>{gerar}</p>
        {gerar &&
         <button onClick={apagarSenha}>Limpar</button>
        }
        </>
    )
}