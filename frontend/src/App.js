import { useAuth0 } from '@auth0/auth0-react';
import { Heading } from '@chakra-ui/react';
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Allroutes from './Routes/Allroutes';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className={styles.body}>
      <Navbar />
      {isAuthenticated ? <Allroutes />: <Heading>Login first</Heading>}
    </div>
  );
}

export default App;
