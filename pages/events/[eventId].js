import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert/ErrorAlert';
import { getEventById } from '../../dummy-data';
import { useRouter } from 'next/router';

/* Show details for selected event */

function EventDetailPage() {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<>
				<ErrorAlert>
					<p>No event with id {`${eventId}`} was found!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const { title, image, date, location, id } = event;

	return (
		<>
			<EventSummary title={title} />
			<EventLogistics
				date={date}
				address={location}
				image={image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}

export default EventDetailPage;
