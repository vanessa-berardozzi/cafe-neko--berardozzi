import { Box, Typography, Container } from '@mui/material';
import ValuesCards from './ValuesCards';

export default function OurValues() {
  return (
    <Box
      component="section"
      sx={{ py: 6 }}
      mt={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: 'Nohemi, sans-serif',
          fontWeight: 600,
          letterSpacing: 0.5,
          lineHeight: 1.1,
          mb: 3,
          color: '#71A894',
          fontSize: { xs: '2.5rem', md: '3.6rem' },
        }}
      >
        Nos Valeurs
      </Typography>

      <Container maxWidth="xl">
        <ValuesCards />
      </Container>
    </Box>
  );
}
