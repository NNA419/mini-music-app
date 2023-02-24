import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import "./App.css";

const App = () => {

  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
              <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
