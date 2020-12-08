import '../App.css';
import $ from "jquery"
import React, {useState} from 'react';
import{
    Link
} from "react-router-dom";


function Home(props) {

    var [cart,setCart] = useState(props.cart);
    var [wallet,setWallet] = useState(props.wallet);
    var [objects] = useState(props.objects);


    const buyObject = (id) =>{
        if(objects[id] && objects[id].Pr <= wallet && objects[id].Cnt > 0){
            setWallet(wallet - objects[id].Pr);
            objects[id].Cnt --;
            setCart([...cart,objects[id]]);
            props.onChangeCart(objects[id]);
            props.onChangeWallet(wallet - objects[id].Pr);
        }else{
            alert("Buy a valid product!");
        }
        $("input").val("");
    };
    const concatCode = (index) =>{
        $("input").val( $("input").val() + index);
    }


  return (
    <div className="main">
        <div className="wallet">
            <div className="headerObj greyHeader">Wallet: {wallet} lei</div>
            <div style={{"textAlign":"center","margin":"10px"}}>
                <Link to={"/cart"}>Items: {cart.length}</Link>
            </div>
            <div style={{"textAlign":"center"}}>
                <input type="text"  defaultValue="" />
                <div>
                    <p>
                        <button className="optionBtn" onClick={() => concatCode(1)}>1</button>
                        <button className="optionBtn" onClick={() => concatCode(2)}>2</button>
                        <button className="optionBtn" onClick={() => concatCode(3)}>3</button>
                    </p>
                    <p>
                        <button className="optionBtn" onClick={() => concatCode(4)}>4</button>
                        <button className="optionBtn" onClick={() => concatCode(5)}>5</button>
                        <button className="optionBtn" onClick={() => concatCode(6)}>6</button>
                    </p>
                    <p>
                        <button className="optionBtn" onClick={() => concatCode(7)}>7</button>
                        <button className="optionBtn" onClick={() => concatCode(8)}>8</button>
                        <button className="optionBtn" onClick={() => concatCode(9)}>9</button>
                    </p>
                    <p>
                        <button className="optionBtn" onClick={() => $("input").val("")} style={{"background":"red"}}>Del</button>
                        <button className="optionBtn" onClick={() => concatCode(0)}>0</button>
                        <button className="optionBtn" onClick={() => buyObject(parseInt($("input").val()))} style={{"background":"rgb(60, 179, 113)"}}>Pay</button>
                    </p>
                </div>
            </div>
        </div>
        <div className="containerObj">
        {
            objects.map((obj) => {
                return <div className="item" key={obj._id}>
                    <div className="headerObj greyHeader">
                        Price: {obj.Pr} lei 
                        Quantity: {obj.Cnt}
                    </div>
                    <div className="imagesDiv">
                        <img src={ "/images/" + obj.N + ".jpg"} alt={obj.N} />
                    </div>
                    <div className="footerObj">{obj._id}</div>
                </div>
            })
        }
        </div>
    </div>
  );
}

export default Home;
