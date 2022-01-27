import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title/ResultsTitle';
import ErrorAlert from '../../components/ui/error-alert/ErrorAlert';
import Button from '../../components/ui/Button';
import { getFilteredEvents } from '../../dummy-data';
// import Link from 'next/link';

/* Show filtered events */

function FilteredEventsPage() {
	const router = useRouter();

	// filterData will be undefined after the first time the page loads
	const filterData = router.query.slug;

	// prevent an error if filterData is not yet defined (e.g., after the first time the page loads)
	if (!filterData) {
		// apply global class
		return <p className="center">Loading</p>;
	}

	const filteredYear = router.query.slug[0];
	const filteredMonth = router.query.slug[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values.</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter.</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<>
			<ResultsTitle date={date}></ResultsTitle>
			<EventList events={filteredEvents}></EventList>
		</>
	);
}

export default FilteredEventsPage;
