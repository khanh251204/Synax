import logo from './logo.svg';
import './App.css';
import People from './components/people';
function App() {
  return (
    <div className="App">
      <People 
      fullName = 'Hoàng Quốc Khánh'
      age = '18'
      class = 'IT22E'
      />
      <People 
      fullName = 'Phan Gia Huy'
      age = '18'
      class = 'CO22E'
      />
      <People 
      fullName = 'Nguyễn Trường Vinh'
      age = '18'
      class = 'CO22E'
      />
      
    </div>
  );
}

export default App;
