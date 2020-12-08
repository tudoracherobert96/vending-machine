import './App.css';
import Home from './Views/Home';
import Cart from './Views/Cart';
import React, {useState} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    var [cart,setCart] = useState([]);
    var [wallet,setWallet] = useState(100);
    var [objects] = useState([{
        _id:0,
        N:"7days",
        Pr:3,
        Cnt:5
    },{
        _id:1,
        N:"7dayscoconut",
        Pr:4,
        Cnt:2
    },{
        _id:2,
        N:"bucovina",
        Pr:1,
        Cnt:5
    },{
        _id:3,
        N:"dorna",
        Pr:5,
        Cnt:11
    },{
        _id:4,
        N:"fanta",
        Pr:5,
        Cnt:6
    },{
        _id:5,
        N:"kinderbueno",
        Pr:3,
        Cnt:3
    },{
        _id:6,
        N:"kitkat",
        Pr:3,
        Cnt:6
    },{
        _id:7,
        N:"lays",
        Pr:6,
        Cnt:6
    },{
        _id:8,
        N:"mars",
        Pr:3,
        Cnt:7
    },{
        _id:9,
        N:"oreo",
        Pr:2,
        Cnt:5
    },{
        _id:10,
        N:"sprite",
        Pr:4,
        Cnt:8
    }]);

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home cart={cart} wallet={wallet} objects={objects} onChangeCart={(retCart) => setCart([...cart,retCart])}
                              onChangeWallet={(newWallet) => setWallet(newWallet)}/>
                    </Route>
                    <Route path="/cart">
                        <Cart cart={cart} wallet={wallet} onChangeWallet={(newWallet) => setWallet(newWallet)}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
