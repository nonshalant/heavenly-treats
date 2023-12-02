import React, { useState } from 'react'
import {ImMinus} from 'react-icons/im'

const Filters = ({setfilterValue}) => {

    const toogleFilter = (filter) => {
        setfilterValue(filter)
    }

  return (
    <div className='filters-container'>
        <div className="filter">
            <h2 onClick={()=>toogleFilter('strain')}> Strain <ImMinus/></h2>
            <ul className="options">
                <label htmlFor="all1">
                    <input type="checkbox" name="all1" id="all1" />
                    <li>All</li>
                </label>
                <label htmlFor="indica">
                    <input type="checkbox" name="indica" id="indica" />
                    <li>Indica</li>                
                </label>
                <label htmlFor="sative">
                    <input type="checkbox" name="sative" id="sative" />
                    <li>Sative</li>
                </label>
                <label htmlFor="hybrid">
                    <input type="checkbox" name="hybrid" id="hybrid" />
                    <li>Hybrid</li>
                </label>
                <label htmlFor="cbd">
                    <input type="checkbox" name="cbd" id="cbd" />
                    <li>CBD</li>
                </label>
            </ul>
        </div>
        <div className="filter">
            <h2 onClick={()=>toogleFilter('categories')}>Categories <ImMinus/></h2>
            <ul className="options">
                <label htmlFor="all2">
                    <input type="checkbox" name="all2" id="all2" />
                    <li>All</li>
                </label> 
                <label htmlFor="edibles">
                    <input type="checkbox" name="edibles" id="edibles" />
                    <li>Edibles</li>
                </label> 
                <label htmlFor="flowers">
                    <input type="checkbox" name="flowers" id="flowers" />
                    <li>Flowers</li>
                </label> 
                <label htmlFor="pre-rolls">
                    <input type="checkbox" name="pre-rolls" id="pre-rolls" />
                    <li>Pre-rolls</li>
                </label> 
                <label htmlFor="cbd">
                    <input type="checkbox" name="cbd" id="cbd" />
                    <li>CBD</li>
                </label>
            </ul>
        </div>
        <div className="filter">
            <h2 onClick={()=>toogleFilter('side-effects')}>Side-Effect<ImMinus/></h2>
            <ul className="options">
                <label htmlFor="all3">
                    <input type="checkbox" name="all3" id="all3" />
                    <li>All</li>
                </label>
                <label htmlFor="relaxed">
                    <input type="checkbox" name="relaxed" id="relaxed" />
                    <li>Relaxed</li>
                </label>
                <label htmlFor="sleepy">
                    <input type="checkbox" name="sleepy" id="sleepy" />
                    <li>Sleepy</li>
                </label>
                <label htmlFor="blissful">
                    <input type="checkbox" name="blissful" id="blissful" />
                    <li>Blissful</li>
                </label>
                <label htmlFor="pain-free">
                    <input type="checkbox" name="pain-free" id="pain-free" />
                    <li>Pain Free</li>
                </label>
                <label htmlFor="hungry">
                    <input type="checkbox" name="hungry" id="hungry" />
                    <li>Hungry</li>
                </label>
                <label htmlFor="creative">
                    <input type="checkbox" name="creative" id="creative" />
                    <li>Creative</li>
                </label>
            </ul>
        </div>
        <div className="filter">
            <h2 onClick={()=>toogleFilter('price')}>Price<ImMinus/></h2>
            <ul className="options">
                <label htmlFor="all4">
                    <input type="checkbox" name="all4" id="all4" />
                    <li>All</li>
                </label>
                <label htmlFor="20-40">
                    <input type="checkbox" name="20-40" id="20-40" />
                    <li>Under $20</li>
                </label>
                <label htmlFor="40-60">
                    <input type="checkbox" name="40-60" id="40-60" />
                    <li>$40 - $60</li>
                </label>
                <label htmlFor="60-80">
                    <input type="checkbox" name="60-80" id="60-80" />
                    <li>$60 - $80</li>
                </label>
                <label htmlFor="80+">
                    <input type="checkbox" name="80+" id="80+" />
                    <li>$80 and beyond</li>
                </label>
            </ul>
        </div>
    </div>
  )
}

export default Filters