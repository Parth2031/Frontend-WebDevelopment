import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../Store/Selectors/shopSelector';
import withSpinner from '../../HigherOrderComponents/withSpinner/withSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;