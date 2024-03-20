"use client"
import Image from 'next/image';
import BackgroundSlider from './BgSlider/Slider';


function Jumbotron({images, captionClass, subTextClass, book}: any) {
  return (
    <div className='w-full h-full'>
        <BackgroundSlider images={images} interval={3000} captionClass={captionClass} subTextClass={subTextClass} book={book}/>
    </div>
  );
}

export default Jumbotron;