import React from 'react';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './CollectionPreviewStyles';
import CollectionItem from '../Collection Item/CollectionItem'; 

const collectionPreview = ({ title, items, history, match, routeName }) =>
{
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}> {title.toUpperCase()} </TitleContainer>
      <PreviewContainer>
        { items
           .filter((item, idx) => idx < 4)
           .map(item => (
             <CollectionItem key={item.id} item={item} />
           ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default collectionPreview;