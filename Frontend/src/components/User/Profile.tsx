
import { getCurrentUser } from "../../services/authenticate-service";
import MemberList from  "../MemberList";


const Profile = () => {
  const currentUser = getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Profile
        </h3>
      </header>
     
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
        
        <strong>Name:</strong> {}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role: string, index: number) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};
export default Profile;