import React from 'react'

function Contact() {
  return (
  <div>
    <hr style={{marginTop:"150px"}} />
    <div className='contact'>
       
     <div>
      <h1 id='con'>New York</h1>
      <a href=""><ul>Marian Goodman Gallery</ul>
      <ul>24 West 57th Street</ul>
      <ul>New York, NY 10019</ul>
</a>
<a href=""><ul>T 212-977-7160</ul>
      
      <ul>newyork@mariangoodman.com</ul>
     <ul> VIEW--MAP</ul>
     </a>

     </div>
    
      
    
     <div>
      <h1 id='con'>Paris</h1>
      <a href=""><ul>
Galerie Marian Goodman</ul>
<ul>79 & 66 rue du Temple</ul>
      <ul>75003 Paris</ul>
      <ul>
Tuesday - Saturday, 11 am - 7 pm</ul>
  


      



</a>
<a href=""><ul>T +33 (0)1-48-04-70-52</ul>
      
      <ul>paris@mariangoodman.com</ul>
     <ul> VIEW--MAP</ul>
</a>
     </div>

     <div>
      <h1 id='con'>Los Angeles</h1>
      <a href=""><ul>Marian Goodman Gallery</ul>
      <ul>Hollywood</ul>
      <ul>Los Angeles, CA 90038</ul>
</a>
<a href="">
      
      <ul>losangeles@mariangoodman.com</ul>
     <ul> VIEW--MAP</ul>
</a>







     </div>
    
     
    </div>
    <hr />
    <h2 style={{marginLeft:'10px'}}>Contact Us</h2>
    <div className='contact'>
      <div>
        <div><p className='p'>Sales Inquiries</p>
        <a href=""><p>inquire@mariangoodman.com</p></a>
        </div>
        <div>
          <p>Image and Reproduction Requests</p>
          <a href=""><p>catherine@mariangoodman.com</p></a>
        </div>
      </div>
      <div>
        {/* <ul>Press Requests</ul>
        <span >New York:</span>
        <a href=""><ul className='ola'>linda@mariangoodman.com</ul></a>
        <span >Paris:</span>
        <a href=""><ul className='Ola'>aphaele@mariangoodman.com</ul></a> */}
        
  <p className='p'>Press Requests</p>
  <p>Email: <a href="mailto:linda@mariangoodman.com">linda@mariangoodman.com</a></p>
  <p>Email: <a href="mailto:raphaele@mariangoodman.com">raphaele@mariangoodman.com</a></p>
      </div>
    
    </div>
    <hr />
    <div className='last'>
    <div><h3>Join our list</h3></div>
    <div><p>Sign up to receive emails featuring the latest news and events.</p></div>
    <div>
      <input type="text" placeholder='Your Email Address'  />
      <button>Go</button>
 
    </div>
   </div>
   <hr />

    <div className='logo'>
  <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <a href="#" class="fa fa-facebook"></a>
<span>FACEBOOK</span>
  </div>

<div>
<a href="#" class="fa fa-twitter"></a>
<span>TWITTER</span>
</div>
<div>
<a href="#" class="fa fa-youtube"></a>
<span>YOUTUBE</span>
</div>
<div>
<a href="#" class="fa fa-instagram"></a>
<span>INSTAGRAME</span>
</div>
<div>
<a href="#" class="fa fa-wechat"></a>
<span>WECHAT</span>
</div>


   <div></div>
   </div>
    </div>
)
}

export default Contact

 




    
      




      
    

      
    


