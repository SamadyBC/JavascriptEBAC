import './App.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState } from './atoms';

function App() {
  const userName = useRecoilValue(userState);
  const [user, setUser] = useRecoilState(userState);

  return (
    <> 
      <h2>Olá, {userName}.</h2>
      <input 
        value={user} 
        placeholder="Digite seu nome"
        onChange={ (e) => setUser(e.target.value )}
      />
      <p>Caracteres: {user.length}</p>

    
    </>
  );
}

export default App;
