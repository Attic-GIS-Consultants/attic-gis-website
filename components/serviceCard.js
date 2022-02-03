import { Card, CardContent,CardMedia, Grid, Typography } from "@mui/material"

export default function ServiceCard(props) {
    return (
        <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent:'center' }}
      >
        <Grid item>
          <Typography
            gutterBottom
            variant="h6"
          >
            {props.title}
          </Typography>
          <Typography
            color="textPrimary"
            variant="body1"
          >
            {props.body}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
    );
}
