import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold max-w-lg">
          
          <span className="text-coral-red "> Special </span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          laboriosam quibusdam, tempore quo, eius provident officia maxime
          doloribus tempora optio blanditiis porro quia ipsum corporis.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eveniet itaque magni dolorem aliquid perferendis iure et voluptate.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} link={"https://www.nike.com/in/"} />
          <Button label="Learn More" backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray" link={"https://www.nike.com/in/"} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers