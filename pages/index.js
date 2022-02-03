import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Grid, Typography } from "@mui/material"
import ServiceCard from '../components/serviceCard'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Attic GIS Malawi</title>
        <meta name="description" content="man" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}

      >
        <Container maxWidth={false} className={styles.mainBox}>
          <Grid
            container
            spacing={6}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Box sx={{ width: '100%',gap:'20px' }}>
                <Typography variant="h1" className={styles.headingFirst}>
                  Locate Everything
                </Typography>
                <Typography varinat="body1" className={styles.paraFirst}>
                  Developers of geospatial applications and analysts of various phenomenon .Let us solve your spatial problems.
                </Typography>
              </Box>

            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              
            </Grid>
          </Grid>

        </Container>
        <div className={styles.wordWrapper}>
          <Typography variant='h3'>Our Services</Typography>
        </div>

        <Container>
          <Grid
            container
            spacing={6}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <ServiceCard
                title="Software Development"
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <ServiceCard
                title="Spatial Analysis"
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <ServiceCard
                title="Data Collection"
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <ServiceCard
                title="Consulting"
              />
            </Grid>
          </Grid>



        </Container>

      </Box>


      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
