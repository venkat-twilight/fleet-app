import React, { useState, ChangeEvent, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, TextField, InputAdornment, IconButton, Button, Checkbox } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import frontimage from '../../assets/images/frontImage.svg';
import Logo from '../../assets/images/logo.svg';
import shadow from '../../assets/images/shadow.svg';

export default function BasicGrid() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={7} md={7} lg={8}>
          <img
            src={frontimage}
            alt="frontimage"
            style={{
              width: '100%',
              height: '102vh'
            }}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={4} container justifyContent="center" alignItems="center" style={{ position: 'relative' }}>
          <Box >
            <img src={shadow} alt="shadow" style={{ position: 'absolute', top: 0, right: 0, width: 'auto', height: 'auto', }} />
          </Box>
          <Box width={350} sx={{ textAlign: 'center' }}>
            <img src={Logo} alt="Logo" style={{ marginBottom: 16 }} />
            <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#2B2F38' }}>
              Log in to your account
            </Typography>
            <Typography sx={{ fontWeight: '400', fontsize: '16px', color: '#667085' }}>
              Welcome back! Please enter your details.
            </Typography>
            <TextField
              name="email"
              label="Email"
              placeholder="Enter the Email ID"
              value={formData.email}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              name="password"
              label="Password"
              placeholder="Enter the password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }} /* Add your Checkbox props here */ />
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#48505E' }}>Remember Me</span>
              </Box>
              <Box>
                <a href="/login/forget-password" style={{ textDecoration: 'none', color: '#1366D9', fontSize: '14px', fontWeight: '500' }}>
                  Forgot Password?
                </a>
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2, backgroundColor: '#EB6247', color: '#FFFFFF', textDecoration: 'none', }}
            >
              Sign In
            </Button>
            {/* Footer */}
            <Box style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', textAlign: 'center', padding: '16px 0' }}>
              <Typography sx={{ color: '#626262', fontWeight: '400', fontsize: '14px' }}>
                © 2024 Copyright <span style={{ color: '#4191FF' }}>10XTECHNOLOGIES.</span>All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

