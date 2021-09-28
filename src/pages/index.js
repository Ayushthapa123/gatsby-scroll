import React, { useEffect } from 'react'
import '../css/index.css'
import image from '../images/webdesign.jpg'

export default function Index() {





 


  useEffect(()=> {

    function debounce(func, wait=1,immediate=true) {


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
      
      // console.log('scrolled',scrolled);
      // console.log('pageheight',pageheight);
      // console.log('left & right', leftdivheight,rightdivheight);
      
      
      let rate=leftdivheight/(rightdivheight-leftdivheight);
     
      
      let translate=scrolled/(1+rate);
      leftdiv.style.transform='translateY('+translate+'px)';
      
      console.log('scrolled')
      }
    
    window.addEventListener('scroll', debounce(handleScroll));
   
     
    },[]);



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
  <p>Like lightning, a plan came together to 
    break the confines of the Manhattan lunch market and 
    offer stadium’s snacks and beverages nationwide. We combined the 
    ability for users to create their own custom snack 
    stashes with a simple and scalable way for companies 
    or individuals to give gifts to 2 or 2000 people in just
     a few clicks. Contributing to naming, messaging, design and UX.
      We worked closely with Stadium’s CEO, product and sales leads
       to formulate and execute the launch of an entirely
        new brand in less than 30 days. </p>



        <p>Like lightning, a plan came together to 
    break the confines of the Manhattan lunch market and 
    offer stadium’s snacks and beverages nationwide. We combined the 
    ability for users to create their own custom snack 
    stashes with a simple and scalable way for companies 
    or individuals to give gifts to 2 or 2000 people in just
     a few clicks. Contributing to naming, messaging, design and UX.
      We worked closely with Stadium’s CEO, product and sales leads
       to formulate and execute the launch of an entirely
        new brand in less than 30 days. </p>


  <p>Like lightning, a plan came together to 
    break the confines of the Manhattan lunch market and 
    offer stadium’s snacks and beverages nationwide. We combined the 
    ability for users to create their own custom snack 
    stashes with a simple and scalable way for companies 
    or individuals to give gifts to 2 or 2000 people in just
     a few clicks. Contributing to naming, messaging, design and UX.
      We worked closely with Stadium’s CEO, product and sales leads
       to formulate and execute the launch of an entirely
        new brand in less than 30 days. </p>







</div>





<div className='right'>
  <img src={image} alt='web design image'/>
  
 <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>


    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>


    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>


    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>


    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>



    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>

    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>
    <p>What does the pandemic, a lunch delivery
    service and a snack gifting platform have 
    to do with each other? Everything.

When COVID hit Manhattan in March 2020 and sent 
office workers home it put Stadium, a successful
 group lunch service on the sidelines. The delivery
  brand which had revolutionized NYC office lunch with
   top dishes from top restaurants all delivered together
    ceased operations as the way 
    we work (and ate) changed overnight.</p>




</div>



</div>


    </div>

    <div className='footer'>

     </div>

    </>
  )
}
