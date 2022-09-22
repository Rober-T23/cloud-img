import storage from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './App.css';
//import Home from './Componentes/Home.jsx'
function App() {
  const getFile = (file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const percent = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        console.log(snapshot)
   
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    )
  }
  return (
    <div className="App">
      <input type="file" onChange={(e) => getFile(e.target.files[0])} />
    </div>
  );
}

export default App;