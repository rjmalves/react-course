import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Luc_Viatour_Hotel_de_ville_Bruxelles_1.JPG/800px-Luc_Viatour_Hotel_de_ville_Bruxelles_1.JPG",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Luc_Viatour_Hotel_de_ville_Bruxelles_1.JPG/800px-Luc_Viatour_Hotel_de_ville_Bruxelles_1.JPG",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       mettups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
