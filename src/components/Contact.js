import React from 'react'

export default function Contact(props){
    var classToLinks = "flex flex-col w-24 justify-center items-center text-center lowercase m-2"
    return(
        <div className='w-full h-full flex flex-col justify-evenly items-center p-2'>
            <a href='mailto: luanphy.y@gmail.com' className={classToLinks}>
                <img alt='Email' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-kiranshastry-2.png"/>
                <h1>luanphy.y@gmail.com</h1>
            </a>
            <a href="https://github.com/luan-sabino" target="_blank" rel='noreferrer' className={classToLinks}>
                <img alt='GitHub' src="https://img.icons8.com/small/64/000000/github.png"/>
                <h1>luan-sabino</h1>
            </a>
            <a href="https://twitter.com/lupsabino" target="_blank" rel='noreferrer' className={classToLinks}>
                <img alt='Twitter' src="https://img.icons8.com/windows/64/000000/twitter.png"/>
                @lupsabino
            </a>
            <a href="https://www.linkedin.com/in/luan-sabino/" target="_blank" rel='noreferrer' className={classToLinks}>
                <img alt='Linkedin' src="https://img.icons8.com/material-sharp/64/000000/linkedin--v1.png"/>
                luan-sabino
            </a>
        </div>
    );
}