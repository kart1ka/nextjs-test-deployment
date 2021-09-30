import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    // Send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return (
    // <Layout>
    <MeetupList meetups={loadedMeetups} />
    // </Layout>
  );
}

export default HomePage;
