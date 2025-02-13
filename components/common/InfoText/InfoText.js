import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: spacing(10, 0),
    '&.center': {
      alignItems: 'center',
    },
    '&.start': {
      alignItems: 'flex-start',
    },
    '&.end': {
      alignItems: 'flex-end',
    },
  },
  text: {
    maxWidth: 500,
  },
}));

const InfoText = ({
  titleProps,
  title,
  titleAlign = 'center',
  titleVariant = 'h3',
  textProps,
  text,
  textAlign = 'center',
  textVariant = 'body2',
  icon,
  align = 'center',
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.root, align)}>
      {icon}
      {typeof title === 'string' ? (
        <Typography variant={titleVariant} align={titleAlign} {...titleProps}>
          {title}
        </Typography>
      ) : (
        title
      )}

      {typeof text === 'string' ? (
        <Typography
          className={classes.text}
          variant={textVariant}
          color="textSecondary"
          align={textAlign}
          {...textProps}>
          {text}
        </Typography>
      ) : (
        text
      )}

      {children}
    </Box>
  );
};

InfoText.propTypes = {
  icon: PropTypes.elementType,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  children: PropTypes.elementType,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  titleVariant: PropTypes.string, // not applied if title is elementType
  titleAlign: PropTypes.string, // not applied if title is elementType
  titleProps: PropTypes.any, // not applied if title is elementType
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  textVariant: PropTypes.string, // not applied if title is elementType
  textAlign: PropTypes.string, // not applied if title is elementType
  textProps: PropTypes.any, // not applied if title is elementType
};

export default InfoText;
