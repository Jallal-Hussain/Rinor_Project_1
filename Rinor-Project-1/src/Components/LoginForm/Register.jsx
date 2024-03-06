import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Register = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Name must be at least 2 characters")
      .matches(/^[A-Z][a-z]*$/, "First letter should be capital")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(3, "Name must be at least 2 characters")
      .matches(/^[A-Z][a-z]*$/, "First letter should be capital")
      .required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be a positive number"),
    gender: Yup.string().required("Gender is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      console.log(values);
      // Reset form after submission
      resetForm();
      // Open the modal after the submission
      handleOpen();
    },
  });

  // Create a state variable for the modal open
  const [open, setOpen] = React.useState(false);

  // Handle the modal open event
  const handleOpen = () => {
    setOpen(true);
  };

  // Handle the modal close event
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="First name"
              name="firstName"
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
              size="medium"
              margin="normal"
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              label="Last name"
              name="lastName"
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
              size="medium"
              margin="normal"
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              size="medium"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              margin="normal"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              size="medium"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              margin="normal"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              fullWidth
              size="medium"
              type="password"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              margin="normal"
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <TextField
              label="Age"
              name="age"
              variant="outlined"
              fullWidth
              size="medium"
              value={formik.values.age}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              margin="normal"
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Gender
              </Typography>
              <RadioGroup
                name="gender"
                defaultValue=""
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <Box sx={{ display: "flex" }}>
                  <FormControlLabel
                    control={<Radio />}
                    value="male"
                    label="Male"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="female"
                    label="Female"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    value="other"
                    label="Other"
                  />
                </Box>
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender ? (
                <Typography color="error" variant="body2">
                  {formik.errors.gender}
                </Typography>
              ) : null}
            </Box>
            <Box sx={{ textAlign: "center", marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>

      {/* Add the modal component with the dialog component */}
      <Modal open={open} onClose={handleClose}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Congratulations!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You are successfully registered.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Modal>
    </Grid>
  );
};

export default Register;