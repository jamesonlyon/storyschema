import './styles/App.css';
import { genRandomSchema } from './functions/generateSchemas.js';
import { storySchemas } from './data/storySchemas.js';

function App() {
  let random = genRandomSchema(storySchemas);
  console.log(random);

  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
