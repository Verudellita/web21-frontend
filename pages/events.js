import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, makeStyles } from '@material-ui/core';
import EventBox from '../components/events/EventBox/EventBox';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  margin: spacing(5, 3),
  display: 'flex',
  flexDirection: 'row',
  '& > *': {
    flex: 1,
  },
  [breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}));

export default function Events() {
  const classes = useStyles();

  return (
    <Container maxWidth={'lg'}>
      <Box m={4}>
        <EventsHeadline />
        <Box>filters</Box>
        <Box className={classes.root}>
          events
          <EventBox slug="prvni-event" />
          <EventBox slug="druhy-event" />
          <EventBox slug="treti-event" />
          <EventBox slug="ctvrty-event" />
        </Box>
      </Box>
    </Container>
  );
}
