import { useDispatch } from "react-redux";
import { userLogIn } from "redux/thunks";
import { TextField, Button, Paper } from "@mui/material";
import commonCss from "../../css/common.module.css";
import css from "./LoginForm.module.css";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(userLogIn({ email: form.elements.email.value, password: form.elements.password.value }));
        form.reset();
}

  return (
    <div className={commonCss.container}>
      <Paper elevation={24} className={css.form}>
        <form onSubmit={handleFormSubmit}>
          <h2 className={css.formTitle}>SIGN IN</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </div>
  );
    };

export default LoginForm;