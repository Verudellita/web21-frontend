import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import aboutPageData from '../data/aboutPageData';
import AboutHeadline from '../components/aboutUs/AboutHeadline';
import ImageMosaic from '../components/aboutUs/ImageMosaic';
import AboutHeadline2 from '../components/aboutUs/AboutHeadline2';

const useStyles = makeStyles(() => ({
  root: {},
}));

const About = ({ data }) => {
  const classes = useStyles();
  return (
    <Box m={4} className={classes.root}>
      <AboutHeadline />
      <ImageMosaic />
      <AboutHeadline2 />
      <Box>Title with text and picture - LEFT</Box>
      <Box>Title with text and picture - RIGHT</Box>
      <Box>Title with text and picture and action - LEFT</Box>
      <Box>
        Sponzoring
        <ScorecardsBox stats={data.stats} />
        <Box>Title with text and picture and action - LEFT</Box>
      </Box>
      <PartnersSection />
    </Box>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    stats: PropTypes.object,
  }),
};

export async function getStaticProps() {
  return {
    props: { data: aboutPageData },
  };
}

export default About;
