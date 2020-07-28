import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.scss';
import MenuItem from '../Menu Item/MenuItem';
import { selectDirectorySections } from '../../Store/Selectors/directorySelector';

const directory = ({ sections }) => 
{
  return (
    <div className='directory-menu'>
      { sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector
({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(directory);