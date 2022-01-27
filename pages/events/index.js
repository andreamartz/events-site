import Link from 'next/link';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data.js';
import EventsSearch from '../../components/events/EventsSearch';

/* Show all events */

function AllEventsPage() {
	const events = getAllEvents();
	const router = useRouter();

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList events={events}></EventList>
		</>
	);
}

export default AllEventsPage;
