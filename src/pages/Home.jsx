import React, { Component } from 'react'
import Banner from '../components/Banner'
import Latest from '../components/Latest'
import New from '../components/New'
import Smart from '../components/Smart'
import picture1 from '../img/original1.jpg'
import picture2 from '../img/original2.jpg'
import picture3 from '../img/original3.jpg'
import picture4 from '../img/original4.jpg'
import data from '../data/data'
import SingleCard from '../components/SingleCard'
import SingleCartTwo from '../components/SingleCartTwo'
import datamtwo from '../data/datatwo'
import datamthree from '../data/datathree'
import SingleCartThree from '../components/SingleCartThree'
import Duis from '../components/Duis'


class Home extends Component {
  render() {
    return (
   <>
    
      <New />
    
     <div className="row  mt-2">
     <Smart foto={picture1} title="Smart Watches" text1="Kitchen" text2="Publications" text3="Utility" text4="5% too 15% of" text5="View All" />
     <Smart foto={picture2} title="Smart Android" text1="Tablet Air" text2="Television & Video" text3="Video Game Consols" text4="Wereably Texnology" text5="View All" />
     <Smart foto={picture3}  title="Headphones  Earphones" text1="Video Projectors" text2="Laptop Accessories" text3="GPS & Navigation" text4="eBook Readers & Accessories" text5="View All" />
     <Smart foto={picture4}  title="Computers & Laptops" text1="Automotive" text2="Camera & Photo" text3="Cell Phones & Accessories" text4="Accessories & Supplies"  text5="View All"   />



     </div>
      

      <div className="row">
        <h3>Featured Products</h3>
{data.map((item,i)=>{
 return <SingleCard photo={item.image} title={item.title} price={item.price} key={i} item={item}/>
})}
      </div>
    
      <Banner />

     <div className="row">
      <h3>Best Sellers</h3>
      {datamtwo.map((item,i)=>{
 return <SingleCartTwo photo={item.image} title={item.title} price={item.price} key={i} item={item} />
})}
     </div>

      <Latest />

            <div className="row">
              <h3>New Products</h3>
              {datamthree.map((item,i)=>{
 return <SingleCartThree photo={item.image} title={item.title} price={item.price} key={i} item={item} />
})}
            </div>



            <Duis />

   </>

    )
  }
}

export default Home