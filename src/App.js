import './styles/App.css';
import SchemaList from './components/SchemaList.js';
import SchemaTemplate from './components/SchemaTemplate.js';

function App() {

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
