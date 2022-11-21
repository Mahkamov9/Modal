import { useState } from 'react';
import './App.css';
import Modal from './components/modal/modal';
import logo from './assets/img/mylogo.png';

function App() {

const [open, setOpen] = useState(false)
const [second, setSecond] = useState(false)


  return (
    <div className="App">

      <div className='btnBox'>
        <button className='appBtn' onClick={ () => setOpen(true) }>Qo'shish</button>
        <button className='appBtn' onClick={ () => setSecond(true) }>Ayrish</button>
      </div>
      
      <Modal modal={open} setModal={setOpen} topText='Subtitle' >
        <form >
          <input type="mailto" placeholder='mahkamov.dev@gmail.com' required />
          <button>Submit</button>
        </form>
      </Modal>

      <Modal modal={second} setModal={setSecond} topText='Title' >
        <form >
          <input type="text" placeholder='+998 93 191 97 37' required />
          <button>Submit</button>
        </form>
      </Modal>
      <div className='watermake'>
          <img  src={logo} alt="" />
      </div>

    </div>
  );
}

export default App;
