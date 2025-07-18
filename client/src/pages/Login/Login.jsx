// React Imports
import { useState } from 'react';
import { TextField, Button, Typography, FormHelperText, FormControl, InputAdornment, IconButton, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValues = {
    email: '',
    password: '',
};

const Login = () => {

    // Hooks
    const navigate = useNavigate();

    // State
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleVisibility = () => setShowPassword((prev) => !prev);

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),

        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Must contain at least one number')
            .matches(/[@$!%*?&]/, 'Must contain at least one special character'),
    });

    const handleSubmit = (values) => {
        console.log('Submitted values:', values);
        navigate("/dashboard");
    };

    return (
        <Grid container alignItems="center" justifyContent="center" height="100vh" bgcolor="rgb(255, 255, 255)">
            <Grid size={{ xs: 10, sm: 7, md: 5, lg: 4, xl: 3 }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <img src='https://cdn.shopify.com/s/files/1/2212/5849/files/medal_1.png?v=1752596395' alt='boosmaker-logo' />
                    <Typography variant="h5" fontWeight={500} sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        mb: 4, mt: 2,
                        textAlign: "center",
                        letterSpacing: "0.03333em"
                    }}>
                        Login to your account
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, handleChange, values }) => (
                            <Form style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                                {/* Email */}
                                <FormControl fullWidth error={Boolean(errors.email)}>
                                    <Typography sx={{ mx: 0.5, mb: 0.4 }}>Email Address</Typography>
                                    <TextField
                                        id="email"
                                        type='email'
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                    />
                                    {errors.email && (
                                        <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{errors.email}</FormHelperText>
                                    )}
                                </FormControl>

                                {/* Password */}
                                <FormControl fullWidth error={Boolean(errors.password)}>
                                    <Typography sx={{ mx: 0.5, mb: 0.4 }}>Password</Typography>
                                    <TextField
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={errors.password}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleToggleVisibility} edge="end">
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {errors.password && (
                                        <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{errors.password}</FormHelperText>
                                    )}
                                </FormControl>

                                <Typography sx={{ letterSpacing: "0.03333em", fontSize: "1rem", fontWeight: "500" }}>OR</Typography>
                                <Typography sx={{ letterSpacing: "0.03333em", fontSize: "0.938rem", fontWeight: "500", textDecoration: "underline", color: "#ff0101", cursor: "pointer" }}>Send OTP</Typography>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Checkbox color='default' />
                                        <Typography sx={{ letterSpacing: "0.03333em", fontSize: "0.938rem", fontWeight: "500" }}>Remember Me</Typography>
                                    </div>
                                    <Typography sx={{ textDecoration: "underline", color: "#ff0101", cursor: "pointer" }}>
                                        Forgot Password?
                                    </Typography>
                                </div>

                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: "black", borderRadius: "10px", padding: "10px 0px", fontWeight: "500", fontSize: "18px" }}>
                                    Sign In
                                </Button>
                                <Typography sx={{ textDecoration: "underline", color: "#ff0101", cursor: "pointer" }} onClick={() => navigate("/signup")}>
                                    Sign up now
                                </Typography>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Grid>
        </Grid >
    );
};

export default Login;
