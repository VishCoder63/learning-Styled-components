// import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';
import { Trow } from './components/Trow';

function App() {
  return (
    <div className="App">
      <Table>
        <thead>
          <Trow cols={['Rank', 'Name', 'Points', 'Team']} />
        </thead>
        <tbody>          
          <Trow cols={['1', 'Domenic', '88,110', 'dcode']} />
          <Trow cols={['2', 'Sally', '72,400', 'Students']} />
          <Trow cols={['3', 'Nick', '52,300', 'dcode']} />
        </tbody>
      </Table>
    </div>
  );
}

export default App;
