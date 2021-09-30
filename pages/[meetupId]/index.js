import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg"
        title="A First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup!"
      />
    </Fragment>
  );
}

export default MeetupDetails;
