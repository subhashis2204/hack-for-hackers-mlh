import React from 'react'
import bgImg from '../assets/bg.jpg';
// import { useForm } from 'react-hook-form';

export default function Form() {

    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register and enjoy the service</span>

                <form id='form' className='flex flex-col'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Location' />
                    <input type="text" placeholder='Description' />
                    <input type="text" placeholder='Skills' />
                    <input type="text" placeholder='LinkedIn' />
                    <input type="text" placeholder='Twitter' />
                    <input type="text" placeholder='Github' />
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="HELLO WORLD" />
            </div>
        </div>
    </section>
  )
}