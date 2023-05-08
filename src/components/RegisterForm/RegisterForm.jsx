import { useDispatch } from "react-redux";
import { userRegister } from "redux/thunks";


const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
    e.preventDefault();
        const form = e.currentTarget;
        dispatch(userRegister({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value }));
        form.reset();
    }
    
    return (
        <form onSubmit={handleSubmitForm}>
            <h2>REGISTRATION FORM</h2>
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    );
}

export default RegisterForm;