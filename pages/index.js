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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Server side generation
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// Static Generation
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10, // Incremental Static Generation
//   };
// }

export default HomePage;
