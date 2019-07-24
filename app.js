const Header = (props) => {
  return (
    <header>
      <h1>{ props.title}</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Guil
      </span>
    </div>
  );
}

const Counter = () => {
  return (
    <button className="counter-action decrement"> - </button>
    // <span className="counter-score">35</span>
    <button className="counter-action increment"> + </button>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header
      title="Scoreboard"
      totalPlayers={1}
     />

      <Player />
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
