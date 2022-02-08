import React from "react";

const SearchBar = (props) => {
    return (
        <div className='w-11/12 md:w-4/5 p-4 mx-auto bg-gray-700 rounded'>
            <form className='grid grid-cols-6 gap-3'>
                <div className='col-span-4 sm:col-span-5'>
                    <input type="text" placeholder="Type an item name" className='appearance-none w-full rounded p-2 align-middle focus:outline-none' />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                    <button className='btn-primary'>Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;