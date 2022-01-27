import Link from 'next/link';
import styles from './Button.module.css';

/* Renders a button OR, if link prop is present, a Link */

function Button({ children, link, onClick }) {
	if (link) {
		return (
			<Link href={link}>
				<a className={styles.btn}>{children}</a>
			</Link>
		);
	}
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
