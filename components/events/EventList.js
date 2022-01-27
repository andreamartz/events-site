import Event from './Event';
import styles from './EventList.module.css';

/* Renders a list of events */

function EventList({ events }) {
	return (
		<>
			<ul className={styles.list}>
				{events.map((event) => (
					<Event
						key={event.id}
						title={event.title}
						image={event.image}
						date={event.date}
						location={event.location}
						id={event.id}
					></Event>
				))}
			</ul>
		</>
	);
}

export default EventList;
