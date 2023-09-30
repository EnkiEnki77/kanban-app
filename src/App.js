
import './App.css';
import Button from './components/button/Button';
import SubtaskCheckbox from './components/subtask-checkbox/SubtaskCheckbox';


function App() {
  return (
    <div className="App">
      <Button btnModifier='primary'/>
      <Button btnModifier='primary primary-lg'/>
      <Button btnModifier='secondary'/>
      <Button btnModifier='destructive'/>
      <SubtaskCheckbox/>
    </div>
  );
}

export default App;
