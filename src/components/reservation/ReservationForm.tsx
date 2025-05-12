import React, { useState } from 'react';
import {
  TextField,
  Button,
  Stack,
  Box,
  FormHelperText,
  Alert,
  Collapse,
} from '@mui/material';
import { ReservationFormData, FormErrors } from '../../types/reservation';

// Props for the form field component
interface FormFieldProps {
  label: string;
  name: keyof ReservationFormData;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  type?: string;
  required?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Reusable form field component with standardized styling and error handling
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  required = false,
}) => (
  <Box sx={{ width: '100%', position: 'relative' }}>
    <TextField
      variant="standard"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
      required={required}
      error={!!error}
      sx={{
        '& .MuiInputBase-input': {
          fontFamily: 'Inter, sans-serif',
        },
        '& .Mui-error:after': {
          borderBottomColor: '#d32f2f',
        },
      }}
    />
    {error && (
      <FormHelperText
        error
        sx={{
          mt: 0.5,
          ml: 0,
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          color: '#d32f2f',
        }}
      >
        {error}
      </FormHelperText>
    )}
  </Box>
);

/**
 * Reservation form component that handles user input, validation, and submission
 */
const ReservationForm: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<ReservationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  /**
   * Handles input changes and clears errors when fields are modified
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (isSubmitted && errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = 'Le prénom ne doit pas contenir de chiffres';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = 'Le nom ne doit pas contenir de chiffres';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalide';
    }

    // Phone validation )
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^0[1-9][0-9]{8}$/.test(formData.phone)) {
      newErrors.phone = 'Format de téléphone invalide (ex: 0612345678)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission, validation, and success state
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      // Simulating server request with success outcome
      setTimeout(() => {
        setSubmitSuccess(true);

        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
          });
          setIsSubmitted(false);
          setSubmitSuccess(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        height: '100%',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: { xs: '100%', md: '90%' },
        mx: 'auto',
      }}
    >
      {/* Success message */}
      <Collapse in={submitSuccess}>
        <Alert
          severity="success"
          sx={{
            mb: 3,
            fontFamily: 'Inter, sans-serif',
            '& .MuiAlert-message': {
              fontWeight: 500,
            },
          }}
        >
          Votre réservation a été envoyée avec succès ! Nous vous contacterons
          bientôt.
        </Alert>
      </Collapse>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FormField
              label="Nom"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={isSubmitted ? errors.lastName : undefined}
              required
            />
            <FormField
              label="Prénom"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={isSubmitted ? errors.firstName : undefined}
              type="text"
              required
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FormField
              label="Téléphone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={isSubmitted ? errors.phone : undefined}
              type="tel"
              required
            />
            <FormField
              label="Adresse email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={isSubmitted ? errors.email : undefined}
              type="email"
              required
            />
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#71A894',
                '&:hover': { bgcolor: '#5d8a77' },
                px: 4,
                py: 2.5,
                mt: 2,
                borderRadius: 8,
                boxShadow: 0,
                fontFamily: 'ProximaNova-Bold, sans-serif',
                fontWeight: 700,
                textTransform: 'none',
              }}
            >
              Réserver
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ReservationForm;
