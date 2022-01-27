import Button from '../ui/Button';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import DateIcon from '../icons/DateIcon';
import Image from 'next/image';
import styles from './Event.module.css';

function Event({ title, image, date, location, id }) {
	const humanReadableDate = new Date(date).toLocaleString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	console.log('LOCATION: ', location);
	const formattedAddress = location.replace(', ', '\n');
	console.log('FORMATTED ADDRESS: ', formattedAddress);
	const exploreLink = `/events/${id}`;
	const imageSrc = `/${image}`;

	return (
		<li className={styles.event}>
			<img src={imageSrc} alt={title} />
			{/* <Image src={`/${image}`} alt={title} width="300" height="300" /> */}
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<DateIcon className={styles.icon} />
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${id}`}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon className={styles.icon} />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default Event;
