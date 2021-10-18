import React from 'react';
import pictureProfile from '../img/profile.png';

export default function Profile(props){
    return(
        <div className='w-full h-full flex flex-col justify-evenly items-center p-2'>
            <img src={pictureProfile} alt="Foto do Luan" className="rounded-full w-52"></img>
            <h1 className='text-center  font-mono text-lg sm:text-xl font-extrabold'> oi 😀 <br/> meu nome é Luan Sabino <br/> provavelmente sou a pessoa que você procura 😉 </h1>
        </div>
    );
}