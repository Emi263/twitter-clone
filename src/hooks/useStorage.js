import React, { useEffect, useState } from "react";
import {
  projectFirestore,
  projectstorage,
  timestamp,
} from "../firebase/firebaseconfig";
import { GlobalContext } from "../store/GlobalProvider";

const useStorage = (file, caption) => {
  const { user } = React.useContext(GlobalContext);

  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const refStorage = projectstorage.ref(`twitter/${file.name}`);
    const refFirestore = projectFirestore.collection(
      `twitterImages/user/${user.email}`
    ); //creates collection images and referes to it
    const fileUploaded = refStorage.put(file); // upload file
    fileUploaded.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {},
      async () => {
        const url = await refStorage.getDownloadURL();
        const createdAt = timestamp();
        await refFirestore.add({ url, createdAt, caption });
        setUrl(url);
      }
    );
  }, [file]);

  return { url, progress };
};

export default useStorage;
