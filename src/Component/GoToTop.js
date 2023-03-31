import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useEffect,useState } from 'react';

function GoToTop() {
    const [isVisible,setIsVisible] = useState(false);

  const goToBtn=()=>{
    window.scrollTo({top:0,right:0,behavior:'smooth'});
  };
  const listenToScroll = () => {
    let heightToHidden=100;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll > heightToHidden){
        setIsVisible(true);
    }else{
        setIsVisible(false);
    }

  };
  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
  }) 
  return (
    <div className='section'>
        {isVisible &&(
    <div className='top-btn' onClick={goToBtn}>
    <i class="bi bi-arrow-up fs-5"></i>
    </div>
    )}
    </div>
  )
};


export default GoToTop
