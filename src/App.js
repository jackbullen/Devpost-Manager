import './App.css'; 
import HackathonList from './components/HackathonList';
import myHackathons from './data/hackathons.json';
function App() {

  return (
    <div className="p-4 bg-gray-100">

      <header className='mb-10 text-3xl font-bold mb-4 text-center'>
        <h1>My Devpost Event Manager</h1>
      </header>

      <div className="max-w-lg mx-auto">
        <HackathonList hackathons={myHackathons.slice(1,)} />
      </div>

    </div>
  );
}

export default App;
