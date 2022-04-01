import logo from "assets/logo.svg";
import styles from "./Item.module.scss";

export default function Item(){
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Prato de Macarrão</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>
                        Massa
                    </div>
                    <div className={styles.item__porcao}>
                        400gramas
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        3 pessoas
                    </div>
                    <div className={styles.item__valor}>50 $</div>
                </div>
            </div>
        </div>
    )
}