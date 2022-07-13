
import './App.css';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <h1> TO  DO LIST</h1>

      <FormInput></FormInput>
    
       <List></List>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
