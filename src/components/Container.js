import React from 'react';

export default function Container(props){
    return(
        <div className={"flex justify-center items-center border-2 rounded-xl border-gray-900 shadow-default transition-all " + props.options} onClick={(e)=>props.handleSize(e.currentTarget)}>
            <h1 className={(props.options.includes('h-5/6') ? 'hidden' : 'flex')}>{props.title}</h1>
            <div className={'w-full h-full ' + (props.options.includes('h-5/6') ? 'flex' : 'hidden')}>{props.children}</div>
        </div>
    );
}