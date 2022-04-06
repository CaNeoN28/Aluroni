import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactComponent as Error404 } from 'assets/not_found.svg';
import classNames from 'classnames';

export default function NotFound() {
	return (
		<div className={classNames({
			[styles.container]: true,
			[stylesTema.container]: true
		})}>
			<Error404 />
		</div>
	);
}