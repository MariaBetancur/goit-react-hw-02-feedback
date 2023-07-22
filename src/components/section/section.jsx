import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children, Sections }) => {
  return (
    <Sections>
      <h2>{title}</h2>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
