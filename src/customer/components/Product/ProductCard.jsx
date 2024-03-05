import React from 'react'

function ProductCard() {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70" alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>
                        Universaloutfit
                    </p>
                    <p>
                        Casual Puff Sleves Women White Top
                    </p>
                </div>
                <div className='flex items center space-x-2'>
                    <p className='font-semibold'>
                        $199
                    </p>
                    <p className='line-through opacity-50'>
                        $1999
                    </p>
                    <p className='text-green-600 font-semibold'>
                        70% off
                    </p>

                </div>

            </div>
        </div >
    )
}

export default ProductCard
