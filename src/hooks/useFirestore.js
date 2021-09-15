import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/firebaseconfig";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const Delete = (id) => {
    projectFirestore.collection(collection).doc(id).delete();
  };
  useEffect(() => {
    projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];

        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
  }, [collection]);

  return { docs, Delete };
};

export default useFirestore;
