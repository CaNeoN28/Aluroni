import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import { type } from '@testing-library/user-event/dist/type';
import classNames from 'classnames';

type IFiltro = typeof filtros[0];

interface Props{
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro} : Props){
	function selecionarFiltros(opcao: IFiltro){
		if(opcao.id == filtro)
			return setFiltro(null);

		return setFiltro(opcao.id);
	}

	return(
		<div className={styles.filtros}>
			{filtros.map((opcao) => (
				<button 
					className = {
						classNames({
							[styles.filtros__filtro]: true,
							[styles['filtros__filtro--ativo']]: filtro==opcao.id
						})
					}
					key={opcao.id} 
					onClick={() => selecionarFiltros(opcao)}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
}