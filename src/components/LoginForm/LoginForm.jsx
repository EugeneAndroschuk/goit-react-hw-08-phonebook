import { useDispatch } from "react-redux";
import { userLogIn } from "redux/thunks";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(userLogIn({ email: form.elements.email.value, password: form.elements.password.value }));
        form.reset();
}

      return (
        <form onSubmit={handleFormSubmit}>
          <h2>LOGIN FORM</h2>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">LogIn</button>
        </form>
      );
    };

export default LoginForm;