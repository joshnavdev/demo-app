import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();

  const onClickHandle = async () => {
    try {
      await axios.post('/api/auth/v0/login', { data: 'test' });
      history.push('/home');
    } catch (error) {
      console.log(error.response.status);
    }
  };

  return (
    <div>
      <button onClick={onClickHandle}>Click here to log-in</button>
    </div>
  );
}

export default Login;
