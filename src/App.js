
import './App.css';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <Button btnModifier='primary'/>
      <Button btnModifier='primary primary-lg'/>
      <Button btnModifier='secondary'/>
      <Button btnModifier='destructive'/>
    </div>
  );
}

export default App;
