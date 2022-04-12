import { useEffect, useState } from 'react';
import Item from './Item';
import cardapio from 'data/cardapio.json';
import styles from './Itens.module.scss';
import { Cardapio } from 'types/Prato';

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props){
	const [lista, setLista] = useState(cardapio);
	const {busca, filtro, ordenador} = props;

	function testaBusca(title: string){
		const regex = RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number){
		if (filtro !== null) return id === filtro;
		return true;
	}

	function ordenarPropriedadeCrescente(
		novaLista: Cardapio, 
		propriedade: 'size' | 'serving' | 'price'){
		return novaLista.sort((a, b) => a[propriedade] > b[propriedade] ? 1: -1);
	}
	function ordenarLista(novaLista: Cardapio){
		switch (ordenador){
		case 'porcao':
			return ordenarPropriedadeCrescente(novaLista, 'size');
		case 'qtd_pessoas':
			return ordenarPropriedadeCrescente(novaLista, 'serving');
		case 'preco':
			return ordenarPropriedadeCrescente(novaLista, 'price');
		default:
			return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = cardapio.filter(cardapio => testaBusca(cardapio.title) && testaFiltro(cardapio.category.id));
		setLista(ordenarLista(novaLista));

	}, [busca, filtro, ordenador]);

	return(
		<div className={styles.itens}>
			{lista.map(item => (
				<div key={item.id}>
					<Item {...item}/>
				</div>
			))}
		</div>
	);
}