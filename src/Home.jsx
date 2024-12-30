import React from 'react'
import { useEffect, useState } from 'react';


import { useNavigate } from 'react-router-dom';
import { CiApple } from "react-icons/ci";
import { TbMeat } from "react-icons/tb";
import { LuCoffee } from "react-icons/lu";
import { MdBreakfastDining } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { CiIceCream } from "react-icons/ci";
import { GiCookingPot } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";
import { LuMilk } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import fooddata from "../src/DB.json";







const Home = () => {

  const navigate = useNavigate();


 const[filtered,setfiltered]=useState([]); 
  const [isopen, setisopen] = useState(false);
  const [cart, setcart] = useState([]);
  const [count, setcount] = useState(1);
  const [total, settotal] = useState(0);
  const [overlay, setoverlay] = useState(false);
 
  const [foods ,setfoods] = useState([]);
  useEffect(() => {
    const getallfoods = async () => {
      try{
        const res = await fetch("http://localhost:3500/foods");
        const data = await res.json();
        setfoods(data);
        console.log(foods);
      }
catch(err){
  console.log("error",err);
}

    }
    getallfoods();

  }, []); 
 

  const closecart = () => {
    setisopen(false);
    setoverlay(false);
  }

  const addcount = () => {
    setcount((count) => (count + 1))
  }
  const minuscount = () => {
    setcount((count) => (count - 1))
  }

  const deleteitem = (product) => {
    setcart(cart.filter((c) => (c.id !== product.id)))
  }



  
  useEffect(() => {

    settotal(cart.reduce((acc, curr) => acc + curr.originalrate, 0))
  }, [cart]);

  const showcart = (food) => {
    setoverlay(true);
    setisopen(true);

    setcart([...cart, food]);
    console.log(cart.length);

  }


  return (
    <><div className='homecontainer'>
      <div className='banner'>
        <img className='image1' src='veg2.jpg'></img>
        <img className='image2' src='veg6.jpg'></img>

        <div className='headings'>
          <h1>Groceries Delivered in 90 Minute</h1>
          <p>Get your healthy foods and snacks delivered at your doorsteps all day everyday</p>

          <div className='inputdiv'>
            <input type='text' onChange={(e)=>setsearch(e.target.value)} placeholder='Search your products from here'></input>


            <button><FaSearch />   Search</button>
          </div>
        </div>
      </div>

      <div className='featurediv'>
        <div className='feature1'>
          <h2>Express Delivary</h2>
          <p>With Selected item</p>
          <button>Save Now</button>

        </div>
        <div className='feature2'>
          <h2>Cash On Delivery</h2>
          <p>With Selected item</p>
          <button>Save Now</button>

        </div>
        <div className='feature3'>
          <h2>Gift Voucher</h2>
          <p>With Selected item</p>
          <button>Save Now</button>

        </div>
      </div>
      <div className='shopcontainer'>


        <ul className='sidebar'>
          <li><CiApple /><select><option>Fruits & Vegetables</option></select></li>
          <li><TbMeat /><select><option>Meat & Fish</option></select></li>
          <li><LuCoffee /><select><option>Snacks</option></select></li>
          <li><PiBowlFoodBold /><select><option>Pet Care</option></select></li>
          <li><MdOutlineCleaningServices /><select><option>Home & Cleaning</option></select></li>
          <li><LuMilk /><select><option>Dairy</option></select></li>
          <li><GiCookingPot /><select><option>Cooking </option></select></li>
          <li><MdBreakfastDining /><select><option>Breakfast </option></select></li>
          <li><MdOutlineEmojiFoodBeverage /><select><option>Beverage </option></select></li>
          <li><CiIceCream /><select><option>Health & Beauty</option></select></li>


        </ul>


        <div className='foods'>
          <div className='cartbar'>

            <p><BsBagCheck /> {cart.length} Item </p>
            <p className='ctotal'>$ {total}</p>
          </div>

          {foods.map((food) => (
          <div   key={food.id} className='box'>
          <img src={food.image}></img>
          {!food.discount ? <h5></h5> : <h5 className='discount'>{food.discount}%</h5>}
          <h2>{food.name}</h2>
          <p>{food.lb}lb</p>
          {!food.linethroughrate ? <h4>  </h4> : <h4 className='linethroughrate'>${food.linethroughrate}</h4>}
          <div className='boxrate'>
            <h4>${food.originalrate}</h4>
            {cart.includes(food) ? <div className='countvalue'>
              <div onClick={addcount}>+</div>
              <div>{count}</div>
              <div onClick={minuscount}>-</div>
            </div> : <button onClick={() => showcart(food)}>Cart</button>}





          </div>



        </div> 
          




            ))}


          <button className='loadmore'>Load More</button>





        </div>
        {overlay && <div className='overlay'></div>}
        {isopen &&

          < div className='showcartbar'>

            <div className='lengthdiv'>
              <h2><BsBagCheck /> {cart.length} item</h2> <div className='close' onClick={closecart}>X</div>
            </div>
            <hr></hr>

            {cart.map((product) => (
              <div className='item' >
                <div className='nos'>
                  <div onClick={addcount}>+</div>
                  <div>{count}</div>
                  <div onClick={minuscount}>-</div>
                </div>
                <img src={product.image} ></img>
                <div className='name'>
                  <h3>{product.name}</h3>
                  <h4 className='or'>${product.originalrate}</h4>
                  <h4>{count}* 2lb</h4>
                </div>
                <div className='rate'>$ {count * product.originalrate}</div>
                <div className='deleteitem' onClick={() => deleteitem(product)}>X</div>

              </div>



            ))}






            <div className='checkoutdiv'>

              <button className='checkout' onClick={() => navigate('/checkoutpage', { state: cart })}>Checkout</button>
              <h3 className='total'>${total}</h3>
            </div>
          </div>

        }






      </div>


    </div >



    </>


  )
}

export default Home