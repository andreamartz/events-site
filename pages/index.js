import Link from 'next/link';
import EventList from '../components/events/EventList';
// import Event from '../components/events/Event';
import { getFeaturedEvents } from '../dummy-data.js';

/* Show featured events */

function HomePage() {
	// get a list of featured events
	const featuredEvents = getFeaturedEvents();
	const { title, image, date, location, id } = featuredEvents[0];

	return (
		<>
			<EventList events={featuredEvents} />
		</>
	);
}

export default HomePage;
