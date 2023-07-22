import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  options,
  onleavefeedback,
  BottonList,
  FeedbackBotton,
}) => (
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
