/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

function CustomCard() {
  return (
    <ThemeProvider theme={{}}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {/* Placeholder text */}
              Example Title
            </Typography>
            <Typography variant="h4" component="h2" color="textPrimary">
              {/* Placeholder text */}
              Example Value
            </Typography>
          </StyledCardContent>
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '8px', paddingBottom: '8px' }}>
            <CalendarTodayIcon style={{ color: '#dddfeb', fontSize: 40 }} />
          </div>
        </StyledCard>
      </Grid>
    </ThemeProvider>
  );
}

export default CustomCard;
