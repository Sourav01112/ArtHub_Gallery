import React from 'react'
import img from "../../assets/contact.png"
import img2 from "../../assets/contact2.png"
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function About() {
  return (
    <div style={{width:"100%"}}>
   <div style={{margin:"auto",width:"60%",marginTop:"90px"}}>
    <img  src={img} alt="" />
    <p style={{marginRight:"30px",fontSize:"13px",textAlign:"center",marginTop:"10px",color:"rgba(0, 0, 0, 0.551)"}}>Pictured from left to right: Rose Lord, Leslie Nolen, Philipp Kaiser, Marian Goodman, Junette Teng, and Emily-Jane Kirwan.</p>
   </div>
   <div style={{width:"94%",margin:"auto",marginTop:"100px"}}>
    <p   className='About'>Marian Goodman Gallery champions the work of artists who stand among the most influential of our time, representing over five generations of diverse thought and practice. What makes the gallery singular is its enduring and deep-rooted collaborations and understanding with the artists—a bond that is concurrent with curators, thought leaders, and art institutions worldwide. The Gallery’s exhibition program, characterized by its caliber and rigor, provides international platforms for its artists to showcase their work, foster vital dialogues with new audiences, and advance their practices within nonprofit and institutional realms.</p>
    <p  className='About'>The Gallery is led by a team of partners, with Philipp Kaiser as President and Partner, Rose Lord and Emily-Jane Kirwan as Managing Partners, and Leslie Nolen and Junette Teng as Partners. Marian Goodman is Founder and CEO</p>
    <p  className='About'>Established in 1977 by Goodman, who had earlier co-founded the art publishing company, Multiples, Inc., the Gallery gained prominence early in its trajectory for introducing the work of seminal European artists to American audiences. Synchronous with the mission at hand, Marian and the Gallery were inevitably drawn to Europe, establishing a Paris location in the Marais district in 1998 and an adjacent space for books and editions in 2017. From 2014 until 2022, the Gallery also operated an exhibition space in London</p>
    <p  className='About'>With its desire to continually explore growing areas of interest for its artists, the Gallery is set to open an exhibition space in Hollywood, Los Angeles, in 2023, and will move its present New York City headquarters to an historic building in Tribeca in 2024. With two major spaces anchoring each coast, and an ongoing program for over two decades in Paris, Marian Goodman Gallery will be able to further advance new bodies of work and the creative practices of the leading contemporary artists of our time</p>
    <p  className='About'>The artists in the Gallery’s program share a culture-critical approach to art, maintain extraordinary perception and integrity, and a tendency in their respective practices to propel the collective experience of art through empowering and sustaining relationships with others. These visionaries, with their distinctive means of expression and technical expertise, have been responsible for inspiring future artists and enriching the dialogue around art. Working in partnership with the Gallery leadership and directors, the artists have continually collaborated to create and stimulate the intellectual discourse within their own work and elsewhere - through their collective knowledge and expertise, the artists have created circles of impact and distinction that continue to impart, illuminate and ground us, and resonate through the industry</p>
    <p  className='About'>The Gallery represents over forty artists and estates working in the U.S. and internationally: Eija-Liisa Ahtila, Chantal Akerman, Giovanni Anselmo, Leonor Antunes, Nairy Baghramian, Lothar Baumgarten, Dara Birnbaum, Christian Boltanski, Marcel Broodthaers, Maurizio Cattelan, James Coleman, Tony Cragg, Richard Deacon, Tacita Dean, Rineke Dijkstra, Cerith Wyn Evans, Andrea Fraser, Dan Graham, Pierre Huyghe, Cristina Iglesias, Amar Kanwar, William Kentridge, An-My Lê, Steve McQueen, Julie Mehretu, Annette Messager, Sabine Moritz, Maria Nordman, Gabriel Orozco, Giulio Paolini, Giuseppe Penone, Anri Sala, Matt Saunders, Tino Sehgal, Paul Sietsema, Robert Smithson, Ettore Spalletti, Tavares Strachan, Thomas Struth, Hiroshi Sugimoto, Niele Toroni, Adrián Villar Rojas, Danh Vo, Lawrence Weiner, James Welling, and Yang Fudong</p>
    <p  className='About'>In addition to its exhibition program, the Gallery’s continued legacy is strengthened by its institutional partnerships and philanthropic efforts. Through organizations such as The Marian Goodman Gallery Initiative in honor of the late Okwui Enwezor, a joint collaborative effort managed by the ICI (Independent Curators Intl.), and the Gallery’s education department, among others, the Gallery has continued to strengthen and expand opportunities for research, education, and access to higher levels of learning, and advocate for building stronger communities of diversity in the realm of art.</p>
   </div>
   <div className='om'>
    <img className='om1' src={img2} alt="" />
   </div>
   <div className='om2'>
    <p style={{marginTop:"50px"}}>Pictured from left to right: Matt Saunders, Eija-Liisa Ahtila, Rineke Dijkstra, Amar Kanwar, Julie Mehretu, Thomas Struth, Tacita Dean, Cristina Iglesias, Christian Boltanski, William Kentridge, Sabine Moritz, Tony Cragg, Gerhard Richter, Niele Toroni, Marian Goodman, Gabriel Orozco, Steve McQueen, Annette Messager, James Coleman, Chantal Akerman, Dara Birnbaum, Tino Seghal, Yang Fudong, Adrîan Villar Rojas, and Danh Vo (2014)</p>

   </div>
   <hr style={{ marginTop: "30px" }} />
      <div className='last'>
        <div><h3 style={{ fontSize: "25px", fontFamily: "Playfair Display, serif" }}>Join our list</h3></div>
        <div><p style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.700)",marginLeft:"70px" }}>Sign up to receive emails featuring the latest news and events.</p></div>
        <div style={{width:"40%",marginTop:"15px"}}>
          <InputGroup width={"100%"}>
            <InputRightElement pointerEvents='none'>
              {/* <PhoneIcon color='gray.300' /> */}
              <ArrowForwardIcon style={{  marginRight: "6px" }} />
            </InputRightElement>
            <Input type='tel' padding={"20px"} borderRadius={"0"} placeholder='Your Email address' />
          </InputGroup>

        </div>
      </div>
      <hr />

      <div className='logo'>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <a href="#" class="fa fa-facebook"></a>
          <span id='name-pro'>FACEBOOK</span>
        </div>

        <div>
          <a href="#" class="fa fa-twitter"></a>
          <span  id='name-pro'>TWITTER</span>
        </div>
        <div>
          <a href="#" class="fa fa-youtube"></a>
          <span id='name-pro'>YOUTUBE</span>
        </div>
        <div>
          <a href="#" class="fa fa-instagram"></a>
          <span id='name-pro'>INSTAGRAME</span>
        </div>
        <div>
          <a href="#" class="fa fa-wechat"></a>
          <span id='name-pro'>WECHAT</span>
        </div>


        <div></div>
      </div>
    </div>
  )
}


export default About
