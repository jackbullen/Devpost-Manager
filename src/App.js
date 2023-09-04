import './App.css'; 
import HackathonList from './components/HackathonList';
import myHackathons from './data/hackathons.json';
function App() {

  return (
    <div className="p-4 bg-gray-100">

      <header className='text-3xl font-bold mb-2 text-center'>
        <h1>My Devpost Event Manager</h1>
      </header>
      <div className='max-w-lg mx-auto mb-2 text-center'>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold mt-2 py-1 px-2 rounded">
            <a href={"https://github.com/jackbullen"}>GitHub</a>
        </button>
      </div>

      <div className="max-w-lg mx-auto">
        <HackathonList hackathons={myHackathons.slice(1,)} />
      </div>

    </div>
  );
}

export default App;
