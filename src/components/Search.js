import React from 'react'
import './Search.css'
const Search = ({ getTime }) => {

    return (
        <div>
            <form>
                <input className='input f4 tc pointer shadow-5 ' type='Date' onChange={(e)=>getTime(e.target.value)}
                // onKeyPress={(ev) => {
                //     if (ev.key === "Enter") {
                //       ev.preventDefault();
                //       getTime(ev.target.value);
                //     }
                //   }}
                required />
            </form>
        </div>
    )
}

export default Search
