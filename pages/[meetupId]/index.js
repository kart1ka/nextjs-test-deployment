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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId); // is not logged in the browser's console but in the integrated terminal in the vscode because this code runs on the server and not on the client side

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
