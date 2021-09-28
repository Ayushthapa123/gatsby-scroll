import React from 'react'
import '../css/index.css'
import image from '../images/webdesign.jpg'

export default function index() {


function debounce(func, wait=3,immediate=true) {


var timeout;
return function() {
    const context=this, args=arguments;
    const later=function() {
        timeout=null;
        if(!immediate) func.apply(context, args);
    };
    const callNow=immediate && !timeout;
    clearTimeout(timeout);
    timeout=setTimeout(later,wait);
    if(callNow) func.apply(context, args);
};
};



function handleScroll(e) {

const leftdiv=document.querySelector(".left");
const pageheight=document.querySelector('.homepage').offsetHeight;
let scrolled=window.pageYOffset;
const leftdivheight=document.querySelector('.left').offsetHeight;
const rightdivheight=document.querySelector('.right').offsetHeight;

console.log('scrolled',scrolled);
console.log('pageheight',pageheight);
console.log('left & right', leftdivheight,rightdivheight);


let rate=leftdivheight/(pageheight-leftdivheight);
console.log(rate);

let translate=scrolled/(1+rate);
leftdiv.style.transform='translateY('+translate+'px)';


}


  window.addEventListener('scroll', debounce(handleScroll));






  return (
<> 


    <div className='homepage'>


      <div className='leftlogo'>
<h1>KERN+LEAD</h1>
<hr/>
<h2>SnackMagic <span>|01</span></h2>
<hr id='fathr'/>
      </div>


<div className='rightlogo'>
<h2>+</h2>
</div>

<div className='mainpage'>

<div className='left'>

  <div className='space'></div>
 <h2>One Disruption Leads to Another.</h2> 
  <p>1
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is hereleft part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
</p>

<p>2
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is hereleft part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
</p>
<p>3
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is hereleft part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
</p>
<p>4
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is hereleft part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
</p>
<p>4
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is hereleft part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
</p>
<p>4
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is hereleft part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
left part is here
</p>










</div>





<div className='right'>
  <img src={image} alt='web design image'/>
  
  
<p>1right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>2
2<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
3<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
4<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
5<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
6<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
7<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
9<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
<p>right part of the body is here right part of the body is here right part of the body is here right part of the body is here</p>
10<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
<p>right part of the body is here</p>
</div>



</div>


    </div>

    <div className='footer'>

     </div>

    </>
  )
}
