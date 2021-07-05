import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Box from '@material-ui/core/Box';
import Logo, { logoVariant } from '../../common/Logo/Logo';
import NextLink from '../../common/NextLink/NextLink';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: spacing(9, 0, 5),
    color: palette.primary.contrastText,
    background: ' url(/artefacts/footer_right.svg), url(/artefacts/footer_left.svg)',
    backgroundRepeat: 'no-repeat,  no-repeat',
    backgroundPosition: 'bottom right,  bottom left',
    [breakpoints.down('sm')]: {
      backgroundColor: palette.primary.main,
      background: 'url(/artefacts/footer_mobile.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: spacing(5, 4, 10),
    '&> *': {
      flex: 1,
      '&> *': {
        padding: spacing(1, 0),
      },
    },
  },
  social: {
    flex: 5,
  },
  socialIcons: {
    justifyContent: 'flex-end',
    display: 'flex',
    '& > *': {
      margin: spacing(0, 1),
    },
  },
}));

export const AppFooter = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth={'lg'}>
        <Logo variant={logoVariant.BW} />
        <Box className={classes.row}>
          <Box>
            <Typography variant={'subtitle1'}>Eventy</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'}>Iniciativy</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'}>GUGeři</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'}>O nás</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box className={classes.social}>
            <Typography align="right" variant={'subtitle1'}>
              Novinky a akce na socials a v newsletteru
            </Typography>
            <Box className={classes.socialIcons}>
              <NextLink href="https://facebook.com">
                <img src="/images/facebook.svg" alt="Link to GUG facebook" />
              </NextLink>
              <NextLink href="https://linkedIn.com">
                <img src="/images/linkedIn.svg" alt="Link to GUG LinkedIn" />
              </NextLink>
              <NextLink href="https://Youtube.com">
                <img src="/images/youtube.svg" alt="Link to GUG Youtube" />
              </NextLink>
              <NextLink href="https://twitter.com">
                <img src="/images/twitter.svg" alt="Link to GUG twitter" />
              </NextLink>
            </Box>
          </Box>
        </Box>
        <Typography align="right" variant={'body2'}>
          Na tomto webu straší
        </Typography>
      </Container>
    </Box>
  );
};
