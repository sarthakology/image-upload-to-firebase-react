// firebaseUpload.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export const uploadFileToFirebase = (imageUpload, setImgURL) => {
  if (imageUpload == null) return;
  
  const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      setImgURL(url);
    });
  });
};
