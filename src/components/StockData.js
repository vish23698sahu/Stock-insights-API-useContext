import React from 'react'
import { useState, useEffect } from 'react'
import finnHub from '../apis/finnHub'

export const StockData = ({ symbol }) => {
    const [stockData, setStockData] = useState();

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/stock/profile2", {
                    params: {
                        symbol
                    }
                })
                console.log(response)

                if (isMounted)
                    setStockData(response.data)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()

        return () => (isMounted = false)
    }, [symbol])

    return (
        <div>
            {
                stockData && (
                    <div className='row border bg-white rounded shadow-sm p-4 mt-5'>
                        <div className='col'>
                            <div>
                                <span><b>name : </b> </span>
                                {stockData.name}
                            </div>
                            <div>
                                <span><b>country : </b> </span>
                                {stockData.country}
                            </div>
                            <div>
                                <span ><b>ticker : </b> </span>
                                {stockData.ticker}
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <span ><b>Exchange : </b> </span>
                                {stockData.exchange}
                            </div>
                            <div>
                                <span ><b>Industry : </b> </span>
                                {stockData.finnhubIndustry}
                            </div>
                            <div>
                                <span ><b>IPO : </b> </span>
                                {stockData.ipo}
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <span ><b>MarketCap : </b></span>
                                {stockData.marketCapitalization}
                            </div>
                            <div>
                                <span ><b>Shares Outstanding : </b> </span>
                                {stockData.shareOutstanding}
                            </div>
                            <div>
                                <span ><b>url : </b> </span>
                                <a href={stockData.weburl} target="_blank" rel="noreferrer" >{stockData.weburl}</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
