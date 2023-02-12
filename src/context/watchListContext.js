import React from 'react'
import { createContext, useState } from "react";

export const WatchListContext = React.createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

    const addStock = (stock) => {
        if (watchList.indexOf(stock) === -1)
            setWatchList([...watchList, stock]);
    }

    const deleteStock = (stock) => {
        const updatedList = watchList.filter((el) => { return el !== stock })
        setWatchList(updatedList);
    }


    return <WatchListContext.Provider value={{ watchList, addStock, deleteStock }} >
        {props.children}
    </WatchListContext.Provider>
}


