// React Imports
import React, { useEffect, useState } from 'react'

// Mui Imports
import { TextField, IconButton, Grid, InputAdornment, Box, Avatar, Divider, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    dob: null,
    role: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const savedData = {
      firstName: 'Remy',
      lastName: 'Sharp',
      email: 'remy@example.com',
      mobileNo: '9876543210',
      password: '123465789',
      dob: dayjs('2000-05-20'),
      role: "admin"
    };
    setFormData(savedData);
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div style={{ padding: "1.25rem" }}>
      <Typography variant='subtitle1' fontSize="1.5rem" fontWeight={500}>My Profile</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={12} md={6} lg={4}>
          <Box
            component="section"
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap="1.5rem"
            sx={{ height: "100%", padding: "1.5rem", overflowY: "auto" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
              sx={{ width: 100, height: 100 }}
            />
            <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
              <TextField
                id="first-name"
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <TextField
                id="last-name"
                label="Last Name"
                fullWidth
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </Box>
            <TextField
              id="email"
              fullWidth
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <TextField
              id="mobile-no"
              fullWidth
              label="Mobile Number"
              type="tel"
              value={formData.mobileNo}
              onChange={(e) => handleChange("mobileNo", e.target.value)}
            />
            <Box sx={{ display: "flex", gap: "10px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  value={formData.dob}
                  onChange={(newValue) => handleChange("dob", newValue)}
                />
              </LocalizationProvider>
              <TextField
                id="role"
                label="Role"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
              />
            </Box>
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              fullWidth
              disabled
              variant="outlined"
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
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserProfile