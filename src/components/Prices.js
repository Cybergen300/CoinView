import React, { Component } from 'react';
import chart from '../logos/chart.png';
import btc from '../logos/btc.png';
import eth from '../logos/eth.png';
import link from '../logos/link.png';
import ada from '../logos/ada.png';
import xmr from '../logos/xmr.png';
import yfi from '../logos/yfi.png';
import lend from '../logos/lend.png';
import comp from '../logos/comp.png';
import uni from '../logos/uni.png';
import gnt from '../logos/gnt.png';

import './css/Prices.css'

const axios = require("axios");

class Prices extends Component {

  async  componentWillMount () {
    this.getData()
  }

  getData = () => {
    axios({
      "method":"GET",
      "url": "https://coinpaprika1.p.rapidapi.com/tickers",
      "headers":{
        "content-type": "application/octet-stream",
        "x-rapidapi-host":"coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key":"71dfe7c099msh8150af183c35686p1f4ea2jsne251ae5ab0e1",
        "useQueryString":true
      }
    }).then((response) => {
      const coins  = response.data
      console.log(coins)

        for (let i=0; i<coins.length; i++){
          if (coins[i].rank <101) {

            this.setState({
              ccData: [...this.state.ccData, coins[i]]
            })
          }
      }
      this.setState({
        ccData: this.state.ccData.sort((a,b) => a.rank -b.rank)
      })
    })
    .catch((error) => {
      console.log(error)
    })

    //Getting currency market data
    axios({
      "method": "GET",
      "url": "https://coinpaprika1.p.rapidapi.com/global",
      "headers":{
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key":"71dfe7c099msh8150af183c35686p1f4ea2jsne251ae5ab0e1",
        "useQueryString": true
      }
    }).then((response) => {
      const globalData = response.data
      this.setState({loading: true})
      this.setState({ccGlobalMcap: globalData.market_cap_usd})
      this.setState({loading : false})
    }).catch((error)=> {
      console.log(error)
    })


  }

  constructor(props) {
    super(props)
    this.state = {
      ccData:  [],
      ccGlobalMcap: '',
      loading: true
    }
  }

  render() {
    return (
      <div>
          <div className="container-fluid w-100 p-0 prices">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex text-center">
                  <table className="table table-dark table-striped table-hover table-fixed table-bordered text-monospace">
                    <caption>Data Source:
                      <a target="_blank" rel="noopener noreferrer" href="https://coinpaprika.com/">coinpaprika</a>
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Market Cap</th>
                      </tr>
                    </thead>
                      <tbody>
                        {this.state.ccData.map((data, key)=> {
                          return(
                            <tr key = {key}>
                              <td> {data.rank}</td>
                              <td>{data.symbol} </td>
                              <td> <a target = "_blank" rel= "noopener noreferrer" href={"https://coinpaprika.com/coin/" + data.id}>{data.name}</a></td>
                              <td> ${(data.quotes.USD.price).toFixed(2)}</td>
                              <td> ${(data.quotes.USD.market_cap).toLocaleString("fr-CH")}</td>
                            </tr>
                            )
                        })}
                      </tbody>
                  </table>
              </main>
            </div>
          </div>
      </div>
    );
  }
}

export default Prices;