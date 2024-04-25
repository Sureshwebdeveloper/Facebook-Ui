import React from 'react'

const Morecontent = ({content}) => {
  return (
    <div className={"sm:hidden md:block xl:hidden 2xl:hidden md:mr-4 bg-black" + (content ? "block" : "hidden")}>
        <section className='mt-48 z-30'>
        <h1>Menu</h1>
        <input type="search" placeholder="Search Box"/>
      </section>
    </div>
  )
}

export default Morecontent