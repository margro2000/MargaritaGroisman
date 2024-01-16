import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Project1 from './Project1.png';
import Project2 from './Project2.png';
import Project3 from './Project3.png';
import ProjectCard from './ProjectCard';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
                  <ProjectCard 
        image={item.img} // use the imported image
        label={item.title} 
        link="/project1" 
      />
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
    img: {Project1},
    title: 'Breakfast',
  },
  {
    img: {Project2},
    title: 'Burger',
  },
  {
    img: {Project3},
    title: 'Camera',
  },
];
