import InputCharacterTimer from '../../components/input-character-timer/input-character-timer';
import MainLayout from '../../components/main-layout/main-layout';
import InputPlayer from '../../containers/input-player/input-player';

function InputCharacter() {
  return (
    <MainLayout HeaderRigthBlock={InputCharacterTimer}>
      <InputPlayer />
    </MainLayout>
  );
}

export default InputCharacter;
