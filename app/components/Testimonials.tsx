import React from 'react'

const Testimonials = ({cards}: any) => {
  return (
    <div className="flex flex-col gap-[2rem] mt-[4rem] mb-[4rem] justify-center items-center md:px-24 px-2">
    <h3 className="text-[20px] uppercase font-[600] text-[#030156] tracking-[8px]">TESTIMONIALS</h3>
    <div className="">
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        {cards.map((card: any, index: any) => (
          <div key={index}>
            <div className='flex flex-col justify-center items-center md:px-[4rem] px-[1rem] md:py-[4rem] py-[2rem]' style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <h2 className='text-[20px] uppercase font-[600] text-[#030156] text-center mb-[2rem]'>{card.title}</h2>
              <p className='md:text-[9px] text-[12px] uppercase font-[400] text-[#0C0C0C] md:text-center text-justify' style={{lineHeight: '20px'}}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Testimonials