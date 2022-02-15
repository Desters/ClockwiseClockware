import GetInfoPage from './components/GetInfoPage';
import PopUpWindow from './components/Popup';
import MastersChoice from './components/MastersChoice';
import './Style.css'

const MasterNumber = 5;

function App() {
  return (
    <div className='Content'>
      <GetInfoPage count={MasterNumber}/>
    </div>
  );
}

export default App;