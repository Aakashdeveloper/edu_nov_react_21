import React from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const StocksData = [
    {
        id: 1,
        name: 'TCS'
            
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
];

const UsersData = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
]

var Stocks = Hoc(StockList, StocksData);
var Users = Hoc(UserList, UsersData);

const App = () => {
    return(
        <div>
            <Stocks/>
            <Users/>
        </div>
    )
}

export default App