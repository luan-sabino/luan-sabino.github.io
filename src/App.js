import Container from "./components/Container";
import Profile from "./components/Profile"
import React from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {

  function handleCollapse(elem){
    setTimeout(()=>{
      elem.childNodes.forEach((child)=>{
        if(child.className.includes('hidden'))
          child.className = child.className.replace('hidden', 'flex');
        else
          child.className = child.className.replace('flex', 'hidden');
      })
    }, 50)
  }

  function expandsComponent(e){
    if(!e.className.includes('h-5/6')){
      e.parentNode.childNodes.forEach((child)=>{
        if(child.className.includes('h-5/6')){
          child.className = child.className.replace('h-5/6', 'h-10');
          handleCollapse(child);
        }
      })
      e.className = e.className.replace('h-10', 'h-5/6');
      handleCollapse(e);
    }
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-4">
      <Container options="w-full h-5/6 m-1"  handleSize={expandsComponent} title='oi 😀'>
        <Profile></Profile>
      </Container>
      <Container options="w-full h-10  m-1"  handleSize={expandsComponent} title='vamos ser amigos!'>
        <Contact></Contact>
      </Container>
      <Container options="w-full h-10  m-1"  handleSize={expandsComponent} title='um pouco sobre mim'>
        <About></About>
      </Container>
      <Container options="w-full h-10  m-1"  handleSize={expandsComponent} title='meus projetos'>
        <Portfolio></Portfolio>
      </Container>
    </div>
  );
}

export default App;
