import React from 'react';
import Game from './game';

class Home extends React.Component {
  state = {
    gameId: 1,
  };

  resetGame = () => 
  this.setState(prevState => ({
    gameId: prevState.gameId + 1,
  }));

  render() {
    return (
      <div className='caption'>
        <h1>Welcome to my Website!</h1>
        <Game 
          key={this.state.gameId}
          autoPlay={this.state.gameId > 1}
          challengeRange={[2, 9]}
          challengeSize={6}
          answerSize={4}
          initialSeconds={15}
          onPlayAgain={this.resetGame}
        />
      </div>
    );
  }
}

export default Home;
