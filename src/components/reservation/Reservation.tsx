import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import ReservationForm from './ReservationForm';

const Reservation: React.FC = (): JSX.Element => {
  // Content data for the reservation section
  const reservationContent = {
    title: 'Réservez votre table !',
    description:
      "Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.",
  };

  return (
    <Box
      id="reservation-section"
      component="section"
      aria-labelledby="reservation-title"
      sx={{
        py: 8,
        mt: 10,
        mb: { xs: 0, md: 12 }, // Ajout d'un espace significatif en bas, surtout en desktop
        bgcolor: '#F3F0EA',
        width: { xs: '100vw', md: '100%' },
        position: 'relative',
        marginLeft: { xs: 'calc(-50vw + 50%)', md: 'auto' },
        marginRight: { xs: 'calc(-50vw + 50%)', md: 'auto' },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left column - Information text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                bgcolor: 'transparent',
                px: { xs: 0, md: 1 },
                mx: { xs: 0, md: 1 },
              }}
            >
              <CardContent>
                <Typography
                  id="reservation-title"
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontFamily: 'Nohemi, sans-serif',
                    fontWeight: 600,
                    mb: 4,
                    color: '#0F172A',
                    fontSize: { xs: '2.5rem', md: '3.6rem' },
                  }}
                >
                  {reservationContent.title}
                </Typography>

                <Typography
                  sx={{
                    variant: 'body1',
                    fontFamily: 'inter, sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: '#0F172A',
                    fontSize: { xs: '1.4rem', md: '1.4rem' },
                  }}
                >
                  {reservationContent.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Right column - Reservation form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ReservationForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reservation;
