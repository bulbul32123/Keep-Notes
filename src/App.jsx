import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateNotes from './components/CreateNotes';
import Note from './Note';

function App() {
  const [AddItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldValue) => {
      return [...oldValue, note];
    });
  };

  const ondelete = (id) => {
    setAddItem((oldValues) => {
      return oldValues.filter((currentdata, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNotes passNote={addNote} />

      {AddItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={ondelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
