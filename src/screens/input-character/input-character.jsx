import React from 'react';
import Btn from '../../components/btn/btn';
import PlayerCard from '../../components/player-card/player-card';
import './input-character.scss';

function InputCharacter() {
  return (
    <div className="input-screen container">
      <header className="header">
        <h1 className="title">who am i</h1>
        <div className="input-timer">
          <div className="lable">Game start</div>
          <div className="timer">00:46</div>
        </div>
      </header>
      <div className="input-player">
        <div className="player-card-wrapp">
          <PlayerCard name={'Player 1'} desription={'this is you'} />
          <PlayerCard name={'Player 2'} desription={'this is you'} />
          <PlayerCard name={'Player 3'} desription={'this is you'} />
          <PlayerCard name={'Player 4'} desription={'this is you'} />
        </div>
        <div className="btn-wrapp">
          <Btn>Suggest a character</Btn>
          <Btn btnStyle={'btn-pink-solid'}>Leave Game</Btn>
        </div>
      </div>
    </div>
  );
}

export default InputCharacter;
