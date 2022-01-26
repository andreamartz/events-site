import Link from 'next/link';
import Image from 'next/image';

function Event({ title, image, date, location, id }) {
	const humanReadableDate = new Date(date).toLocaleString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');

	return (
		<li>
			<Image src={`/${image}`} alt={title} width="300" height="300" />
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{humanReadableDate}</time>
					</div>
					<div>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<Link href={`/events/${id}`}>Explore Event</Link>
			</div>
		</li>
	);
}

export default Event;
