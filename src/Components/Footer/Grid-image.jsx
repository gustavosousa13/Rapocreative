import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function GridImage() {
  return (
    <ImageList sx={{
    marginRight:'50px', 
    width: 350, 
    height: '350', 
    overflow: 'hidden',
    '@media (max-width: 480px)': {

      marginLeft:'-200px',
      marginTop:'0px'
       },

    '@media (max-width:880px )':{
    display:'none'},    
    }} cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: `${import.meta.env.BASE_URL}assets/palermo1.png`,
    title: 'Breakfast',
  },
  {
    img: 'assets/palermo2.jpg',
    title: 'Burger',
  },
  {
    img: 'assets/palermo3.jpg',
    title: 'Camera',
  },
  {
    img: 'assets/palermo4.jpg',
    title: 'Coffee',
  },
  {
    img: 'assets/palermo5.jpg',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
];
