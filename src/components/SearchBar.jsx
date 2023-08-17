import React, { useState } from 'react'

function SearchBar({formData,setFormData,setSearchResult}) {

    const [fieldData,setfieldData]=useState({});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setfieldData({...fieldData,[name]:value})
    }
    
    const searchBtn=()=>{
        const {title,priority,status}=fieldData;
        setSearchResult(
            formData.filter((ele)=>((title?ele.title.includes(title):true )&& (priority?ele.priority===priority:true) && (status?ele.status===status:true)))
        )
    }
    const clearBtn=()=>{
        setfieldData({})
        setSearchResult((pre)=>([...formData]))
    }
  return (
    <>
    <div className='searchBar'>
        <input type="text" name='title' placeholder='Title..' onChange={handleChange} className='inputSearch'/>
        <select name='priority' onChange={handleChange}>
            <option value="">All</option>
            <option>Low</option>
            <option value={'Itermediate'}>Itermediate</option>
            <option>High</option>
        </select>
        <select name='status' onChange={handleChange}>
            <option value="">All</option>
            <option value={'complete'}>completed</option>
            <option value={'pending'}>pending</option>
        </select>
    <div className='searchBtn'>
    <button onClick={searchBtn} className='btn1'>Search</button>
    <button onClick={clearBtn} className='btn1'>Clear</button>
    </div>
    </div>

    </>

  )
}

export default SearchBar