import { Link } from "react-router-dom";
import { listaAparelhos } from "../../components/listaAparelhos";

export default function Aparelhos(){

    return(
        <main>
            <h1>Aparelhos</h1>
            {listaAparelhos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/aparelhos/visualizar-aparelho/${prod.id}`}>
                        - {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}