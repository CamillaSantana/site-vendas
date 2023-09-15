import { useNavigate, useParams } from "react-router-dom"
import { listaAparelhos } from "../../components/listaAparelhos"

export default function VisualizarAparelho(){

    const lista = listaAparelhos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const aparelho = proc[0]

    return(
        <main>
            <h1>{aparelho.nome}</h1>
            <img src={aparelho.imagem} alt={aparelho.nome} />
            <p>Valor: R${aparelho.preco}</p>
        </main>
    )

}