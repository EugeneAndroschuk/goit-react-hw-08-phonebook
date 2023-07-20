import RegisterForm from "components/RegisterForm/RegisterForm";
import AlertError from "components/AlertError/AlertError";
import { useSelector } from "react-redux";
import { getUserRegistered } from "redux/selectors";

const Register = () => {
    const getRegistered = useSelector(getUserRegistered);
    const msg = "We have sent verification email to your mailbox. To finish your registration please verify it";

    return <div>
        {getRegistered && <AlertError msg={msg} />}
        <RegisterForm />
    </div>
}

export default Register;