import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, makeStyles, Paper, Grid } from '@material-ui/core';
import { GdgIcon } from '../components/icons/icons';
import EventPicture from '../components/eventReport/EventPicture';
//import EventProgram from '../components/eventReport/EventProgram';
//import EventInfoBoxTop from '../components/eventReport/EventInfoBoxTop';
//import EventInfoBoxOrganize from '../components/eventReport/EventInfoBoxOrganize';
//import ImageMosaic from '../components/aboutUs/ImageMosaic';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 3),
    padding: theme.spacing(3, 0),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bg: {
    background: 'linear-gradient(to top, rgba(255,255,255) 50%,' + 'rgba(251,251,251) 80%, rgba(251,251,251) 100%)',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container maxWidth={'lg'}>
        <GdgIcon> </GdgIcon>
        <div className={classes.root}>
          <Grid container>
            <Grid item container xs={12} sm={7} elevation={0}>
              <Box>
                <EventPicture />
              </Box>
            </Grid>
            <Grid item container xs={12} sm={5}>
              <Paper className={classes.paper}>
                <Box>
                  Přijďte v úterý 3.3.do brněnského ImpactHubu a odejdete s vaší první aplikací!Na tomto meetupu vám
                  představím programovací jazyk Dart a framework Flutter.Díky Flutteru píšeme jeden společný zdrojový
                  kód a aplikaci můžeme spustit na Androidu, iOS nebo webu.
                </Box>
                <Box className={classes.imageBox}>
                  <img src="/images/hp/gdg.png" />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
