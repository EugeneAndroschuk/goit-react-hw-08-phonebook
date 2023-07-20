import LoginForm from "components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { getUserError } from "redux/selectors";
import AlertError from "components/AlertError/AlertError";



const Login = () => {
    const userError = useSelector(getUserError);
    const msg = 'You have entered wrong Login or Password. Try again.';

    return (
      <div>
            {userError && <AlertError msg={msg} />}

        <LoginForm />
      </div>
    );
}

export default Login;