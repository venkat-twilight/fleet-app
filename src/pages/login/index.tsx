import React, { useState } from "react"
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
import Logo from "../../assets/images/logo.svg"
import shadow from "../../assets/images/shadow.png"
import "../../styles/login.css"
import { useNavigate } from "react-router"
import { useFormik } from "formik"
import * as Yup from "yup"
import Interface from "../../services/interface"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .matches(emailRegex, "In-correct email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Wrong password"),
})

export default function Loginpage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const checkCredentials = (email: any, password: any) => {
    return true
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (values: any) => {
    const isMatch = checkCredentials(values.email, values.password)
    if (isMatch) {
      const params = new URLSearchParams()
      params.append("grant_type", "password")
      params.append("client_id", "tenx-rbac")
      params.append("username", "admintest")
      params.append("password", formik.values.password)
      params.append("email", formik.values.email)
      Interface.post("openid-connect/token", params)
        .then((response) => {
          navigate("/dashboard")
        })
        .catch((error) => console.error(error))
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  })

  return (
    <Box className="login-container">
      <Grid container spacing={0}>
        <Grid item xs={0} sm={7} md={8} lg={8} className="front-image"></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={4}
          container
          justifyContent="center"
          alignItems="center"
          style={{ position: "relative" }}
        >
          <Box
            className="shadow-image"
            style={{ backgroundImage: `url(${shadow})` }}
          />
          <Box className="form">
            <img src={Logo} alt="Logo" className="logo" />
            <Typography className="title">Log in to your account</Typography>
            <Typography className="subtitle">
              Welcome back! Please enter your details.
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Enter the Email ID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                {formik.touched.email && formik.errors.email && (
                  <Box className="error-text">{formik.errors.email}</Box>
                )}
              </Box>
              <Box>
                <TextField
                  name="password"
                  label="Password"
                  placeholder="Enter the password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
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
                {formik.touched.password && formik.errors.password && (
                  <Box className="error-text">{formik.errors.password}</Box>
                )}
              </Box>
              <Box style={{ marginTop: "10px" }}>
                <Box className="checkbox-container">
                  <Box className="checkbox-label">
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 16 },
                      }}
                    />
                    <span>Remember Me</span>
                  </Box>
                  <Box>
                    <Typography className="forgot-password">
                      {" "}
                      Forgot Password?{" "}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  type="submit"
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
            </form>
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
