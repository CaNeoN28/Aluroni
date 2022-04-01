import logo from "assets/logo.svg";
import styles from "./Item.module.scss";
import cardapio from "../itens.json"
import { Props } from "react";

type IItem = typeof cardapio[0]

export default function Item(props: IItem){
    const {title, description, category, size, serving, price} = props;

    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        {serving} pessoa{serving === 1 ? '': 's'}
                    </div>
                    <div className={styles.item__valor}>{price.toFixed(2)}R$</div>
                </div>
            </div>
        </div>
    )
}