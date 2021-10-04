import { MongoClient } from "mongodb";
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
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// Static Generation
export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://kart1k:EzDblojaEonzWN34@cluster0.umz0q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // Incremental Static Generation
  };
}

export default HomePage;

// import { MongoClient } from "mongodb";
// import MeetupList from "../components/meetups/MeetupList";

// function HomePage(props) {
//   return <MeetupList meetups={props.meetups} />;
// }

// // export async function getServerSideProps(context) {
// //   const req = context.req;
// //   const res = context.res;

// //   // fetch data from an API

// //   return {
// //     props: {
// //       meetups: DUMMY_MEETUPS
// //     }
// //   };
// // }

// export async function getStaticProps() {
//   // fetch data from an API
//   const client = await MongoClient.connect(
//     "mongodb+srv://kart1k:EzDblojaEonzWN34@cluster0.umz0q.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
// }

// export default HomePage;
