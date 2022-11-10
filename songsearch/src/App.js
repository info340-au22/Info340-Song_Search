import './App.css';

function App() {
  return (
    <div className="SongSearch">
      <header className="App-header">
        // Insert code here
      </header>
    </div>
  );
}

function TopSongs() {
  return (
    <div>
      <h3> Top Songs of the day </h3>

      <ol class="list-group list-group-flush list-group-numbered">
        <li class="list-group-item bg-transparent">Infiite Ammo - Le Castle Vania</li>
        <li class="list-group-item bg-transparent">Dance Monkey - Tones and I</li>
        <li class="list-group-item bg-transparent">Blinding Lights - The Weekend</li>
        <li class="list-group-item bg-transparent">I Don't Care - Ed Sheeran</li>
        <li class="list-group-item bg-transparent">Mother - Charlie Puth</li>
        <li class="list-group-item bg-transparent">Higher Lover - Kygo</li>
      </ol>
    </div>
  );
}

const topSongsElement = <TopSongs />

let topSongsRoot = ReactDOM.createRoot(document.getElementById('topsongs'));
root.render(topSongsElement);

export default App;
