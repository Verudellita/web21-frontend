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
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 0),
    },
  },
  text: {
    margin: theme.spacing(4, 0),
    fontSize: '16px',
    maxWidth: '60%',
    fontFamily: 'Red Hat Text',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

const AboutHeadline2 = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography component="h3" variant="h3">
            Napojení na Google,<br></br>ale nezávislí
          </Typography>
          <Typography component="div" variant="caption" className={classes.text} color="textSecondary">
            Máme ke Googlu blízko, víme o novinkách a některé naše skupiny jsou napojené na světové hnutí Googlu. Naše
            iniciativy se tím ale neomezují a děláme toho mnohem víc.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

AboutHeadline2.propTypes = {};

export default AboutHeadline2;
