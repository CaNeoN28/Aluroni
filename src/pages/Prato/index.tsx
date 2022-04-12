import { useParams, useLocation, Navigate, useNavigate} from 'react-router-dom';
import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import classNames from 'classnames';

export default function Prato() {
	const navigate = useNavigate();

	const {state} = useLocation();
	const {prato} = state as {prato: typeof cardapio[0]};
	return (
		<div>
			<button className={styles.voltar} onClick={() => navigate(-1)}>
				{'< Voltar'}
			</button>
			<section className={styles.container}>
				<span className={styles.titulo}>{prato.title}</span>
				<div className={styles.imagem}>
					<img src={prato.photo} alt={prato.title} />
				</div>
				<div className={styles.conteudo}>
					<div className={styles.conteudo__descricao}>
						{prato.description}
					</div>
					<div className={styles.tags}>
						<div className={classNames({
							[styles.tags__tipo]: true,
							[styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
						})}>
							{prato.category.label}
						</div>
						<div className={styles.tags__porcao}>
							{prato.size}g
						</div>
						<div className={styles.tags__qtdpessoas}>
							Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
						</div>
						<div className={styles.tags__valor}>
							R$ {prato.price.toFixed(2)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}