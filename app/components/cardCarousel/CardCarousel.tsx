import React from 'react';

const CardCarousel = ({ cards }: any) => {
  return (
   
    <div className="">
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        {cards.map((card: any, index: any) => (
          <div key={index}>
            <div className='flex flex-col justify-center items-center' style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
              <img src={card.image} alt={card.title} style={{ width: '80%', maxHeight: '80%', objectFit: 'cover', borderRadius: "50%" }} />
              <h2 className='text-[20px] uppercase font-[800] text-[#030156]'>{card.title}</h2>
              <p className='text-[14px] uppercase font-[500] text-[#030156]'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;