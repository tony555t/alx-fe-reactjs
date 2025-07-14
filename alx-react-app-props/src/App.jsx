
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App(){
  const UserData = {name: "jane doe" ,email:"tonytullah764@gmail.com"};
};

  return(
    <useContext.provider value={UserData}>
      <div>
        <ProfilePage />
      </div>
    </useContext.provider>

  )


export default App;