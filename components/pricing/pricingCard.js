import React from 'react'

export default function PricingCard({title,price}) {
  return (
    <div className="w-42 h-46 max-w-52 shadow-2xl bg-white rounded-lg border border-gray-200 px-2 py-2 flex flex-col gap-6">
        <div className="flex flex-col">
          <h4 className="text-2xl">{title}</h4>
          <p className="text-md">Subscription</p>
        </div>
        <div className="flex flex-row gap-1">
          <p>MWK</p>
          <h4 className="text-4xl font-bold">{price}</h4>
        </div>
        <div className='max-w-48'>
          <button className="w-full bg-gray-500 rounded-md px-1 py-1 text-white hover:bg-gray-400">
            Choose
          </button>
        </div>
      </div>
  )
}
