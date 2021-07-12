import React from 'react';
import spinner from '../images/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading'
        style={{ margin: '0 auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
