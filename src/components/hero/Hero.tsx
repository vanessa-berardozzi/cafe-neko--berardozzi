import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';

export default function Hero() {
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Partie texte (gauche sur desktop, haut sur mobile) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                bgcolor: 'transparent',
                px: { xs: 0, md: 2 }, // Suppression du padding horizontal en mobile
                mx: { xs: 0, md: 2 }, // Suppression de la marge horizontale en mobile
              }}
            >
              <CardContent sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontFamily: 'Nohemi, sans-serif',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    lineHeight: 1.1,
                    mb: 4,

                    color: '#303031',
                    fontSize: { xs: '2.6rem', md: '3.5rem' },
                  }}
                >
                  Bienvenue
                  <br />
                  chez Café Neko
                </Typography>

                <Typography
                  sx={{
                    fontFamily: 'Nohemi, sans-serif',
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: '#303031',
                    fontSize: { xs: '1.4rem', md: '1.4rem' },
                    mb: 2.5,
                  }}
                >
                  L'endroit où le café rencontre les ronronnements
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  fontSize="1.2rem"
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: '#303031',
                    fontSize: { xs: '1rem', md: '1.3rem' },
                  }}
                >
                  Bienvenue dans notre univers où chaque tasse de café est
                  accompagnée d'une dose d'amour félin.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: { xs: 6, md: 5 },
                    bgcolor: '#71A894',
                    '&:hover': { bgcolor: '#5d8a77' },
                    px: 3,
                    py: 2.5,
                    borderRadius: 8,
                    boxShadow: 0,
                    fontFamily: 'ProximaNova-Bold, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Partie image (droite sur desktop, bas sur mobile) */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/images/cat-hero-section.png"
              alt="Café Neko ambiance"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
