import { useParams, useNavigate } from 'react-router-dom';
import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import classNames from 'classnames';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';

export default function Prato() {
	const navigate = useNavigate();

	const { id } = useParams();
	const prato = cardapio.find(item => item.id === Number(id));

	if (!prato) {
		return <NotFound/>;
	}

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
					<TagsPrato {...prato} />
				</div>
			</section>
		</div>
	);
}