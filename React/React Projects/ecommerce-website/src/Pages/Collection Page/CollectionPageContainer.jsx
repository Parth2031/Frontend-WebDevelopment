import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../Store/Selectors/shopSelector';
import withSpinner from '../../HigherOrderComponents/withSpinner/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(connect(mapStateToProps), withSpinner)(CollectionPage);

export default CollectionPageContainer;