import React, { Component } from 'react';
import img1 from './image/img1.png';
class Cards extends Component{
    render(){
        return(
            <div className="container text-white">
            <div className="row">
            <div className="col-md-4 col-12">
                <div className="card mt-3 p-4" style={{backgroundColor:'#28324e'}}>
                    <img className="card-img-top m-auto " src={img1} alt="Card image" style={{width:'30%',backgroundColor:'#28324e'}}/>
                    <div className="card-body"  style={{backgroundColor:'#28324e'}}>
                        <h4 className="card-title text-center" style={{fontSize:'18px', letterSpacing:'1px', fontWeight:'400'}}>Ethereum Price Predictions</h4>
                        <p className="card-text text-center" style={{color:"#9ca3bc", fontSize:'14px'}}>
                        View the latest Ethereum price predictions sourced directly from the Augur marketplace.
                         What does the crowd expect the price of Ethereum be in the future?</p>
                        <a href="#" className="btn btn-primary w-100">VIEW PRIDICTIONS</a>
                     </div>
                 </div>
                 </div>

            <div className="col-md-4 col-12">

                 <div className="card mt-3 p-4" style={{backgroundColor:'#28324e'}}>
                    <img className="card-img-top m-auto" src={img1} alt="Card image" style={{width:'30%',backgroundColor:'#28324e'}}/>
                  
                    <div className="card-body"  style={{backgroundColor:'#28324e'}}>
                        <h4 className="card-title text-center" style={{fontSize:'18px', letterSpacing:'1px', fontWeight:'400'}}>Buy Ethereum</h4>
                        <p className="card-text text-center"  style={{color:"#9ca3bc", fontSize:'14px'}}>
                        This guide takes a look at the investment case for Ethereum as well as
                         the exchanges and platforms from which it can be bought.</p>
                        <a href="#" className="btn btn-primary w-100">BUY ETHEREUM</a>
                     </div>
                 </div>
                 </div>
                 <div className="col-md-4 col-12">

                 <div className="card mt-3 p-4" style={{backgroundColor:'#28324e'}}>
                 <img className="card-img-top m-auto" src={img1} alt="Card image" style={{width:'30%',backgroundColor:'#28324e'}}/>
                    
                    <div className="card-body" style={{backgroundColor:'#28324e'}}>
                        <h4 className="card-title text-center"  style={{fontSize:'18px', letterSpacing:'1px', fontWeight:'400'}}>Price Calculator</h4>
                        <p className="card-text text-center" style={{color:"#9ca3bc", fontSize:'14px'}}>
                        Calculate the price of Ether in your own local currency using
                         this simple tool with real-time price data.</p>
                        <a href="#" className="btn btn-primary w-100">VIEW CALCULATOR</a>
                     </div>
                 </div>
                 </div>
             </div>
             </div>
        
        );
    }
} 
export default Cards;