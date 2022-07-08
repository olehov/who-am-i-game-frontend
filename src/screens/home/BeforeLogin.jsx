import Btn from '../../components/btn/btn';

function BeforeLogin({ setIsLogin, createGame }) {
  return (
    <>
      <Btn className={'btn-blue-outline'} onClick={createGame}>
        PLAY QUICK GAME
      </Btn>
      <div className="dividing-line"></div>
      <Btn className={'btn-blue-outline'}>CREATE ACCOUNT</Btn>
      <div className={'text-login or'}>or</div>
      <Btn className={'btn-fb-blue'} iconClassName={'fb'}>
        Continue with Facebook
      </Btn>
      <div className={'dividing-line'}></div>
      <div className={'text-login already'}>Already have a account?</div>
      <Btn
        className={'btn-blue-outline'}
        onClick={() => {
          setIsLogin(true);
        }}
      >
        SIGN IN
      </Btn>
    </>
  );
}

export default BeforeLogin;
