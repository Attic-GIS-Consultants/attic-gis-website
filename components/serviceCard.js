import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Link from "next/link";

export default function ServiceCard(props) {
  return (

    <Link href={props.url}>
      <a>
        <Card
          sx={{ height: '100%', display:'flex',flexDirection:'column', justifyContent: 'center',alignItems:'center' }}
          {...props}
        >
          <CardMedia
            image={props.icon}
            sx={
              {
                justifyContent:'center',
                height: 75,
                width: 75
              }
            }
          />
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: 'center' }}
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
      </a>

    </Link>

  );
}
