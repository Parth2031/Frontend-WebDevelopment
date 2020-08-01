import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './DirectoryStyles';
import MenuItem from '../Menu Item/MenuItem';
import { selectDirectorySections } from '../../Store/Selectors/directorySelector';

const directory = ({ sections }) => 
{
  return (
    <DirectoryMenuContainer>
      { sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector
({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(directory);