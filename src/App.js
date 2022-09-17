import './styles/App.css';
import { genRandomSchema } from './functions/generateSchemas.js';
import { storySchemas } from './data/storySchemas.js';
import SchemaList from './components/SchemaList.js';
import SchemaTemplate from './components/SchemaTemplate.js';

function App() {
  let random = genRandomSchema(storySchemas);
  console.log(random);

  return (
    <div className="App">
      <header>
        <h1>
          Story<br/>
          Schema
        </h1>
        <sub>
          Start your creative projects with the perfect mix of structure and freedom...
        </sub>
      </header>
      <main>
          <SchemaList />
          <SchemaTemplate />
      </main>
    </div>
  );
}

export default App;
