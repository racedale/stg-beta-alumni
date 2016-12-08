import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    maxWidth: 640,
    height: 550,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/home/grid-list/homecominglunch.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'images/home/grid-list/homecominglunch2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/home/grid-list/IMG_9359.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/home/grid-list/winery9.jpg',
    title: 'Winery',
    author: 'Hans',
    featured: true,
  },
  {
    img: 'images/home/grid-list/winery.jpg',
    title: 'Winery',
    author: 'Hans',
  },
  {
    img: 'images/home/grid-list/IMG_9364.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const ImageGrid = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Homecoming 2015</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default ImageGrid;
