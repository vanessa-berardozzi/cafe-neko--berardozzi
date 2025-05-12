import React from 'react';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ValueCardProps } from '../../types/reservation';

// Path to static SVG assets
const coffeeIconPath = '/icons/coffee-icon.svg';
const catIconPath = '/icons/cat-icon.svg';
const plantIconPath = '/icons/plant-icon.svg';

/**
 * Individual card component displaying a company value with icon, title and description
 */
const ValueCard: React.FC<ValueCardProps> = ({
  iconSrc,
  title,
  description,
}): JSX.Element => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // Responsive height adjustment
        height: { xs: 'auto', md: '520px' },
        minHeight: { xs: '400px', md: '520px' },
        textAlign: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)', // Ombre plus légère et subtile
      }}
    >
      <Box
        sx={{
          fontSize: 64,
          color: '#71A894',
          mt: 8,
        }}
      >
        <img
          src={iconSrc}
          alt={title}
          style={{ width: '6.5rem', height: '5.5rem' }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: 'Nohemi, sans-serif',
            fontWeight: 700,
            color: '#303031',
            fontSize: '1.5rem',
            textAlign: 'center',
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#303031"
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '1.2rem',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Component that displays three value cards in a responsive grid
 */
const ValuesCards: React.FC = () => {
  // Company values data
  const values = [
    {
      iconSrc: coffeeIconPath,
      title: 'Passionné de Café',
      description:
        "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.",
    },
    {
      iconSrc: catIconPath,
      title: 'Bien-être des Chats',
      description:
        "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.",
    },
    {
      iconSrc: plantIconPath,
      title: 'Engagement Environnemental',
      description:
        "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.",
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        px: 0,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 3, md: 2 }}
        justifyContent="center"
        alignItems={{ xs: 'center', md: 'stretch' }}
        sx={{
          mx: 'auto',

          maxWidth: { xs: '100%', md: '94%' },
          '& > *': {
            flex: 1,
            maxWidth: { xs: '100%', md: '33%' },
          },
        }}
      >
        {values.map((value, index) => (
          <ValueCard
            key={index}
            iconSrc={value.iconSrc}
            title={value.title}
            description={value.description}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ValuesCards;
