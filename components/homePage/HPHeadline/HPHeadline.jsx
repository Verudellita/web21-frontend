import { Button, Container, makeStyles, Typography, Box } from '@material-ui/core';
import React from 'react';
import NextLink from '../../common/NextLink/NextLink';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    margin: spacing(5, 3),
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      flex: 1,
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  bg: {
    background: 'linear-gradient(to bottom, rgba(255,255,255) 50%,' + 'rgba(251,251,251) 80%, rgba(251,251,251) 100%)',
  },
  content: {
    margin: spacing(15, 0, 0),
    [breakpoints.down('sm')]: {
      margin: spacing(2, 0),
    },
  },
  text: {
    margin: spacing(4, 0),
    maxWidth: '50%',
    [breakpoints.down('sm')]: {
      maxWidth: '70%',
    },
  },
  actions: {
    [breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [breakpoints.up('md')]: {
      '&>*': {
        margin: spacing(0, 2, 0, 0),
      },
    },
  },
  imageBox: {
    textAlign: 'center',
    '& > img': {
      maxWidth: '100%',
    },
    [breakpoints.up('md')]: {
      position: 'relative',
      textAlign: 'right',
      right: spacing(-4),
    },
  },
}));

const HPHeadline = () => {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <div className={classes.content}>
        <Container maxWidth={'lg'}>
          <div className={classes.root}>
            <Box>
              <Typography variant="h1">Vzděláváme česko v&nbsp;technologiich</Typography>
              <Typography component="div" variant="caption" className={classes.text} color="textSecondary">
                Jsme komunita GUGerů a hoříme pro stejnou věc: sdílet a předávat dovednosti v nových technologiích.
                Pořádáme akce a sdílíme, co umíme my a naši přednášející.
              </Typography>
              <div className={classes.actions}>
                <Button color="primary" variant="contained" component={NextLink} href="/events">
                  Prozkoumej eventy
                </Button>
                <Button variant="contained" component={NextLink} href="/about">
                  Přidej se k nám
                </Button>
              </div>
            </Box>
            <Box>
              <div className={classes.imageBox}>
                <img src="/images/hp/headline.png" />
              </div>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  );
};

HPHeadline.propTypes = {};

export default HPHeadline;
