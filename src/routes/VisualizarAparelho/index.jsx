import { useNavigate, useParams } from "react-router-dom"
import { listAparelhos } from "../../components/listaAparelhos"

export default function VisualizarAparelho(){

    const lista = listAparelhos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const aparelho = proc[0]

    return(
        <main>
            <h1>Visualizando aparelho:</h1>
            
        </main>
    )

}