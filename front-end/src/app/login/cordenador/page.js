import Link from "next/link";
import logOut from "../../components/logOut";


export default function cordenador() {
    return (
        <div>
            Coordenador
            <br/>

            <logOut/>

           <Link href="./desempenho">Desempenho</Link>
            <br/>
            <Link href="./frequencia">Frequencia</Link>
        </div>
    )
}