import '../App.css';
import React from 'react';
import{
    Link
} from "react-router-dom";
//TODO 1: make array for every money posibilities
function Cart(props) {

    let objects = props.cart;
    let wallet = props.wallet;

    const changeCart = (sum) =>{
        props.onChangeWallet(wallet + sum)
    };

    return (
        <div>
            <div className="wallet">
                <div className="headerObj blueHeader">Wallet: {props.wallet} lei</div>
                <div style={{"textAlign":"center","margin":"10px"}}>
                    <Link to={"/"} style={{"textAlign":"center"}}>Buy more</Link>
                </div>
                <div className="headerObj">
                    <div style={{"textAlign":"center","margin":"10px","fontSize":"20px"}}>
                        Deposit money
                    </div>
                    <div>
                        <p>
                            <button className="optionBtn" onClick={() => changeCart(1)}>1<br />leu</button>
                            <button className="optionBtn" onClick={() => changeCart(5)}>5<br />lei</button>
                            <button className="optionBtn" onClick={() => changeCart(10)}>10<br />lei</button>
                        </p>
                        <p>
                            <button className="optionBtn" onClick={() => changeCart(50)}>50<br />lei</button>
                            <button className="optionBtn" onClick={() => changeCart(100)}>100<br />lei</button>
                            <button className="optionBtn" onClick={() => changeCart(500)}>500<br />lei</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="containerObj">
                {
                    objects.map((obj) => {
                        return <div className="item" key={obj._id}>
                            <div className="headerObj blueHeader">Price: {obj.Pr} lei</div>
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

export default Cart;
