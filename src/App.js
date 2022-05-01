import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Test project</h1>
      <Welcome/>
      <Content/>
    </div>
  );
}

const Welcome = () => {
  return (
    <div className="welcome">
      <p>Welcome to my first react site</p>
    </div>
  );
}

const Content = () => {
  return (
    <div className='content'>
      <ul>
        <li>First theme</li>  
        <li>Second theme</li>  
        <li>Last theme</li>  
      </ul>
    </div>
  );
}


export default App;
