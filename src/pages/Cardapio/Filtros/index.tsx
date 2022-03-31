import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";
import { type } from "@testing-library/user-event/dist/type";

type IFiltro = typeof filtros[0];

export default function Filtros(){
    function selecionarFiltros(opcao: IFiltro){}
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className = {styles.filtros__filtro}key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}