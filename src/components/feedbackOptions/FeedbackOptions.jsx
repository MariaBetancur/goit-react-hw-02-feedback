import React from 'react';
import PropTypes from 'prop-types';
import { BottonList, FeedbackBotton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onleavefeedback }) => (
  <div>
    <BottonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <FeedbackBotton
              onClick={() => {
                onleavefeedback(option);
              }}
            >
              {option}
            </FeedbackBotton>
          </li>
        );
      })}
    </BottonList>
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
