import { Box, Typography, Paper, Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Welcome to Conference App</Typography>
            <Typography variant="body1">
              Explore sessions, connect with speakers, and manage your schedule.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}