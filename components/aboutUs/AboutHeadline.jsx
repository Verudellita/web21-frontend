import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(8, 0, 0),
    display: 'flex',
    '& > *': {
      flex: 1,
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 0),
    },
  },
  content: {
    margin: theme.spacing(8, 0, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Product Sans',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 0),
    },
  },
  text: {
    margin: theme.spacing(4, 0),
    fontSize: '16px',
    maxWidth: '60%',
    //color: '#9A9A9A',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

const AboutHeadline = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography component="h1" variant="h1">
            Vzděláváme česko<br></br>v technologiích
          </Typography>
          <Typography component="div" variant="caption" color="textSecondary" className={classes.text}>
            Sdílíme zájem o technologie - online, v chatu, na přednáškách i na meetupech. Jsme skupina aktivních lidí,
            kteří se navzájem vzdělávají a pomáhají si.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

AboutHeadline.propTypes = {};

export default AboutHeadline;
