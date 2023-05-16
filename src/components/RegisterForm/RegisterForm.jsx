import { useDispatch } from "react-redux";
import { userRegister } from "redux/thunks";
import { Paper, TextField, Button } from "@mui/material";
import commonCss from "../../css/common.module.css";
import css from "./RegisterForm.module.css"


const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
    e.preventDefault();
        const form = e.currentTarget;
        dispatch(userRegister({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value }));
        form.reset();
    }
    
    return (
      <div className={commonCss.container}>
        <Paper elevation={24} className={css.form}>
          <form onSubmit={handleSubmitForm}>
            <h2 className={css.formTitle}>SIGN UP</h2>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />

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
              Sign Up
            </Button>
          </form>
        </Paper>
      </div>
    );
}

export default RegisterForm;