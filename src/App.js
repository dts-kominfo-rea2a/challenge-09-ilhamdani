import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import contactJson from './data/contacts.json'

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header title="Call a Friend" desc="Your Friendly Contact App" />
      <div style={{ width: '500px', margin: '0 auto' }}>
      {contactJson.map(((data, index) => 
        <Contact photo={data.photo} name={data.name} phone={data.phone} email={data.email} />  
      ))
      }
      </div>
    </div>
  );
}

export default App;
