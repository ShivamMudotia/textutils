import './App.css';

let name = "Shivam"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello, {name}</h1>
      <p>How are you ?.</p>
    </div>
    </>
    
  );
}

export default App;
