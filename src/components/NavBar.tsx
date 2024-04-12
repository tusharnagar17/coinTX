import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center py-5 px-28 border-b-2 shadow-md'>
            <div>COINVX-ICON</div>
            <div className='flex gap-5 items-center'>
                <a href=''>Crypto Taxes</a>
                <a href=''>Free Tools</a>
                <a href=''>Resource Center</a>
                <a href='' className='mx-2 border-2 border-sky-500 px-2 py-1 rounded-xl bg-sky-500 hover:bg-transparent text-white hover:text-black'>Get Started</a>
            </div>
        </div>
    )
}

export default NavBar