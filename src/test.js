import { firestore } from "firebase/firestore";

firestore
  .collections("users")
  .doc("id234234")
  .collections("favorites")
  .doc("id2 23213");

firestore.doc("/users/asdas23423dasdasd/favorites/asdasdasd24234a");
firestore.collections("/users/asdasdas23423dasd/favorites");
