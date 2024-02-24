import React, { useState, ChangeEvent, MouseEvent } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import Frontimage from "../../assets/images/frontImage.svg"
import Logo from "../../assets/images/logo.svg"
import shadow from "../../assets/images/shadow.png"
import "../../styles/login.css"
import { useNavigate } from "react-router"

export default function Loginpage() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          lg={8}
          sx={{
            backgroundImage: `url(${Frontimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
     
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={4}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <Box
            style={{
              position: "absolute",
              top: 10,
              right: 0,
              width: "250px",
              height: "250px",
              backgroundImage: `url(${shadow})`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
            }}
          />
          <Box
            width={{ xs: "90%", sm: "80%", md: "75%", lg: "70%" }}
            sx={{ textAlign: "center", position: "absolute", }}
          >
            <img src={Logo} alt="Logo" style={{ marginBottom: 16 }} />
            <Typography
              sx={{ fontWeight: "700", fontSize: "30px", color: "#2B2F38" }}
            >
              Log in to your account
            </Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: "16px", color: "#667085" }}
            >
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
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 16 },
                  }} 
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#48505E",
                  }}
                >
                  Remember Me
                </span>
              </Box>
              <Box>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#1366D9",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Forgot Password?
                </a>
              </Box>
            </Box>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="contained"
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#EB6247",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Sign In
            </Button>
           
          </Box>
          <Box className="login-footer">
              <span>© 2024 Copyright</span>{" "}
              <span className="login-footer-link">10XTECHNOLOGIES</span>. All
              Rights Reserved
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
