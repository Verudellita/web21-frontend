import React from 'react';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import { Typography, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  right: {
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  paper: {
    padding: theme.spacing(2),
    border: '2px solid blue',
  },
  imageBox: {
    display: 'flex',
    textAlign: 'left',
    '& > img': {
      maxWidth: '100%',
    },
  },
}));

export default function Event() {
  const router = useRouter();
  const { event } = router.query;
  const classes = useStyles();

  //todo - load event info

  return (
    <Paper className={classes.paper}>
      <Typography>Name from URL: {event}</Typography>
      <Box className={classes.right}>
        <Box>
          <Box className={classes.imageBox}>
            <img src="/images/hp/gdg.png" />
          </Box>
          <Box className={classes.imageBox}>
            <img src="/images/hp/eventImage.jpg" />
          </Box>
        </Box>
        <Typography component="h6" variant="h6">
          How to grow inside the community
        </Typography>
        <Box>
          <Typography component="div" variant="caption" className={classes.text} color="textSecondary">
            Nathalia Silva from WTM Toronto & Filip Goszler from GUG Czech Republic on growing inside community.
          </Typography>
        </Box>
        <Box>action</Box>
        <Box>map</Box>
        <Box>organizers - ignor for MVP</Box>
        <Box>link o sekci(písmenku)</Box>
      </Box>
      <Box> Next events </Box>
    </Paper>
  );
}
