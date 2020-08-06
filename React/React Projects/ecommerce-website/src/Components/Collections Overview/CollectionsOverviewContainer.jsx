import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../Store/Selectors/shopSelector';
import withSpinner from '../../HigherOrderComponents/withSpinner/withSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// ! Alternative to this case, is written below ->
// const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;