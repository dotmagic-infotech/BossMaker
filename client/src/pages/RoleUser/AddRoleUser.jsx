// React Imports
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Mui Imports
import { TextField, Box, Avatar, Typography, FormControl, FormHelperText, Button, Divider, IconButton, InputAdornment } from '@mui/material';

// Third Party imports
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Mui Icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    dob: null,
    role: '',
    password: '',
};

function AddRoleUser() {

    // Hooks
    const navigate = useNavigate();

    // State
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleVisibility = () => setShowPassword((prev) => !prev);

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name required"),
        lastName: Yup.string().required("Last Name required"),
        mobileNo: Yup.string().required("Mobile Number required"),
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
        <div style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant='subtitle1' fontSize="1.5rem" fontWeight={500}>Basic User Detail</Typography>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, handleChange, values }) => (
                    <Form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>

                        <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "1rem" }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100px", height: "100px", backgroundColor: "#00000029", borderRadius: "10px" }}>
                                <Avatar src="/broken-image.jpg" />
                            </Box>
                            <div>
                                <Typography variant='h5' fontSize="19px">
                                    Profile picture
                                </Typography>
                                <Typography variant='caption' fontSize="0.75rem">
                                    Accepting file type .png .jpg .jpeg <br /> Max size 3MB
                                </Typography>
                            </div>
                            <Button variant="contained" sx={{ backgroundColor: "white", color: "black", width: "100px", borderRadius: "10px", padding: "10px", fontWeight: "500", fontSize: "18px" }}>
                                Upload
                            </Button>
                        </div>

                        <Box sx={{ display: "flex", gap: "3rem", width: "100%" }}>
                            <FormControl fullWidth error={Boolean(errors.firstName)}>
                                <Typography sx={{ mx: 0.5, mb: 0.4 }}>First Name</Typography>
                                <TextField
                                    id="firstName"
                                    type='text'
                                    placeholder="First Name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    error={errors.firstName}
                                />
                                {errors.firstName && (
                                    <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{errors.firstName}</FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(errors.lastName)}>
                                <Typography sx={{ mx: 0.5, mb: 0.4 }}>Last Name</Typography>
                                <TextField
                                    id="lastName"
                                    type='text'
                                    placeholder="Last Name"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    error={errors.lastName}
                                />
                                {errors.lastName && (
                                    <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{errors.lastName}</FormHelperText>
                                )}
                            </FormControl>
                        </Box>
                        <Box sx={{ display: "flex", gap: "3rem", width: "100%" }}>
                            <FormControl fullWidth error={Boolean(errors.mobileNo)}>
                                <Typography sx={{ mx: 0.5, mb: 0.4 }}>Mobile Number</Typography>
                                <TextField
                                    id="mobileNo"
                                    type='text'
                                    placeholder="Mobile Number"
                                    value={values.mobileNo}
                                    onChange={handleChange}
                                    error={errors.mobileNo}
                                />
                                {errors.mobileNo && (
                                    <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{errors.mobileNo}</FormHelperText>
                                )}
                            </FormControl>
                            <FormControl fullWidth error={Boolean(errors.email)}>
                                <Typography sx={{ mx: 0.5, mb: 0.4 }}>Email Address</Typography>
                                <TextField
                                    id="email"
                                    type='text'
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                                {errors.email && (
                                    <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{errors.email}</FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Divider sx={{ my: 2, borderColor: 'black' }} />

                        <Typography variant='subtitle1' fontSize="1.5rem" fontWeight={500}>Security Detail</Typography>

                        <Box sx={{ display: "flex", gap: "3rem", width: "100%" }}>
                            <FormControl fullWidth error={Boolean(errors.email)}>
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
                            <FormControl fullWidth>
                            </FormControl>
                        </Box>

                        {/* Save Cancel Button */}
                        <Box sx={{ display: "flex", justifyContent: "end", gap: "10px", width: "100%" }}>
                            <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: "black", width: "100px", borderRadius: "10px", padding: "10px", fontWeight: "500", fontSize: "18px" }}>
                                Save
                            </Button>
                            <Button variant="contained" color="" sx={{ backgroundColor: "white", width: "100px", borderRadius: "10px", padding: "10px", fontWeight: "500", fontSize: "18px" }}
                                onClick={() => navigate("/role-user")}>
                                Cancel
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddRoleUser