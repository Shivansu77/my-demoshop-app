import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to ReactFolio</h1>
        <p>Your amazing React application is now running!</p>
        <p>✨ Hot reloading is working perfectly ✨</p>
        
        <div className="card">
          <h2>Getting Started</h2>
          <p>This is a beautiful React app with modern CSS styling.</p>
          <button className="button" onClick={() => alert('Button clicked!')}>
            Click Me!
          </button>
        </div>
        
        <div className="card">
          <h2>Features</h2>
          <p>✅ Modern gradient1 background</p>
          <p>✅ Glass morphism design</p>
          <p>✅ Responsive layout</p>
          <p>✅ Smooth animations</p>
        </div>
      </div>
    </div>
  );
}

export default App;
