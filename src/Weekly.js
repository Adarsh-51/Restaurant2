import Image20 from "./Image/food12.jpg"
import Image21 from "./Image/Breakfast1.jpg"
import Image22 from "./Image/Breakfast2.jpg"
import Image23 from "./Image/Breakfast3.jpg"
import Image24 from "./Image/food12.jpg"
import Special from "./Special"
import React from "react"
import { useState } from "react";

const Weekly = () => {
  const [myStyle1,setMyStyle1]=useState({
    display:"block"   
  })
  const [myStyle2,setMyStyle2]=useState({
    display:"none"   
  })
  const [myStyle3,setMyStyle3]=useState({
    display:"none"   
  })
  const handleClick1=()=>{
    setMyStyle1({
      display:"block"
    })
    setMyStyle2({
      display:"none"
    })
    setMyStyle3({
      display:"none"
    })
  }
  const handleClick2=()=>{
    setMyStyle1({
      display:"none"
    })
    setMyStyle2({
      display:"block"
    })
    setMyStyle3({
      display:"none"
    })
  }
  const handleClick3=()=>{
    console.log(myStyle3)
    setMyStyle1({
      display:"none"
    })
    setMyStyle2({
      display:"none"
    })
    setMyStyle3({
      display:"block"
    })
  }
    return(
    <section className="weekSpecial">
      <div className="container6">
        <div className="row">
          <div className="adjust">
            <h3 className="special">Weekly Featured Food</h3>
            <button className="bld1" onClick={handleClick1}>Breakfast</button>
            <button className="bld2" onClick={handleClick2}>Lunch</button>
            <button className="bld3" onClick={handleClick3}>Dinner</button>
          </div>
        </div>
        <div id="break1"  className="container7" style={myStyle1} >
          <div className="row">
            <Special Image={Image20} Name="Pan fried Noodles" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="5$"></Special>
            <Special Image={Image21} Name="Avocado Toast" description="Autem nostrum veniam ducimus aliquid! Temporibus nemo enim quis delectus." price="10$"></Special>
            <Special Image={Image22} Name="chicken & waffels" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="15$"></Special>
            <Special Image={Image23} Name="french toast" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="20$"></Special>
         </div>
        </div>
        <div id="break2" className="container8" style={myStyle2}  >
          <div className="row">
            <Special Image={Image22} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="11$"></Special>
            <Special Image={Image24} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="10$"></Special>
            <Special Image={Image24} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="12$"></Special>
            <Special Image={Image24} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="13$"></Special>
          </div>
        </div>
        <div id="break3" className="container9" style={myStyle3}  >
          <div className="row">
          <Special Image={Image23} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="14$"></Special>
            <Special Image={Image22} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="15$"></Special>
            <Special Image={Image21} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="10$"></Special>
            <Special Image={Image20} Name="Lorem ipsum dolor sit" description="Amet consectetur, adipisicing elit. Natus quidem cupiditate repudiandae." price="11$"></Special>
          </div>
        </div>
      
      
      </div>
    </section>
    );
}

export default Weekly;