import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    margin: spacing(0, 0, 5),
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      flex: 1,
    },
    [breakpoints.down('sm')]: {
      margin: spacing(0, 0, 2),
    },
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    '& > img': {
      maxWidth: '90%',
      borderRadius: '50%',
      '&:first-child': {
        borderTopRightRadius: '0',
      },
      '&:last-child': {
        borderTopLeftRadius: '0',
        borderBottomRightRadius: '0',
      },
    },
    [breakpoints.up('md')]: {
      position: 'relative',
      textAlign: 'right',
      right: spacing(-4),
    },
  },
  imageBox: {
    textAlign: 'center',
    '& > img': {
      maxWidth: '100%',
    },
    [breakpoints.up('md')]: {},
  },
}));

const ImageMosaic = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.imageBox}>
        <img src="/images/hp/mosaic.png" />
      </Box>
    </Box>
  );
};

ImageMosaic.propTypes = {};

export default ImageMosaic;
