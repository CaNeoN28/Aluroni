import opcoes from "./opcoes.json";
import styles from "./Ordenador.module.scss";

export default function Ordenador(){
    return <button className={styles.ordenador}>
        <span>Ordenar por</span>
        <div className={styles.ordenador__options}>
            {opcoes.map(opcao => {
                <div 
                    className={styles.ordenador____option}
                    key={opcao.value}>
                    {opcao.nome}
                </div>
            })}
        </div>
    </button>
}