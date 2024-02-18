import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="/" className="logo">X-Initiatives</a>
      </header>
      
      <nav>
        <a href="" className="nav">Login</a>
        <a href="" className="nav">Register</a>
      </nav>

      <div className="post">
        <div className="image">
          <img src="https://pbs.twimg.com/profile_images/1596615125737299970/ZjeJlfUa_400x400.jpg" alt="umich logo"></img>
        </div>
        <div className="texts">
          <h2>University of Michigan</h2>
          <p>Event desecription in 20 words</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://pbs.twimg.com/profile_images/1596615125737299970/ZjeJlfUa_400x400.jpg" alt="umich logo"></img>
        </div>
        <div className="texts">
          <h2>University of Michigan</h2>
          <p>Event desecription in 20 words</p>
        </div>
      </div>

      <div class="background-image">
        <div class="logo-container">
            <img src="logo.png" alt="Logo" class="logo" />
        </div>
      </div>

      <div className="club_description">
        Hello there, this is Xinitiatives, a club ...
      </div>

    </main>
  );
}

export default App;
