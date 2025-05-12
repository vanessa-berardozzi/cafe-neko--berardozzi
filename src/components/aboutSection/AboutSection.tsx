import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from '@mui/material';

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        bgcolor: '#F3F0EA',

        width: { xs: '100vw', md: '100%' },
        position: 'relative',

        marginLeft: { xs: 'calc(-50vw + 50%)', md: 'auto' },
        marginRight: { xs: 'calc(-50vw + 50%)', md: 'auto' },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="">
          {/* Partie image (gauche sur desktop, BAS sur mobile) */}
          <Grid
            size={{ xs: 12, md: 5 }} // Réduit de 6 à 5 colonnes sur desktop
            sx={{
              order: { xs: 2, md: 1 },
              display: 'flex',
              justifyContent: 'center', // Centrage horizontal du contenu
            }}
          >
            <Box
              component="img"
              src="/images/image-about-us.png"
              alt="Café Neko - Tasse chat"
              sx={{
                alignSelf: 'center',
                width: { xs: '95%', md: '80%' },
                height: 'auto',
                mx: 'auto', // Marges automatiques des deux côtés
                display: 'block',
              }}
            />
          </Grid>

          {/* Partie texte (droite sur desktop, HAUT sur mobile) */}
          <Grid
            size={{ xs: 12, md: 7 }} // Augmenté de 6 à 7 colonnes sur desktop
            sx={{ order: { xs: 1, md: 2 } }} // Ordre 1 sur mobile, 2 sur desktop
          >
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
                  Qui sommes-nous ?
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
                  Bienvenue chez Café Neko, l'endroit où le café et les chats se
                  rencontrent pour créer une expérience unique en son genre.{' '}
                  <br />
                  <br />
                  Chez Café Neko, nous sommes passionnés par deux choses : le
                  café de qualité et le bien-être des chats. Fondé par des
                  amoureux des félins et des aficionados du café, Café Neko est
                  bien plus qu'un simple café. C'est un refuge pour les amoureux
                  des chats, un havre de paix où l'on peut savourer une bonne
                  tasse de café tout en câlinant nos adorables résidents à
                  quatre pattes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
