import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogsPage';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios'

import { CartContext } from './components/Contexts/CartContext';
function App() {
    const [allDogs, setAllDogs] = useState([]);
    const [myCart, addToCart] = useState([{}])
    const [total, setTotal] = useState(0);
    useEffect(() => {

        async function getDatafromBE() {
            //* res : response :  lấy data trả về từ backend
            const res = await axios.get('/v1/dogs')
            return res;
        }
        getDatafromBE().then((res) =>
            // console.log(res.data)
            setAllDogs(res.data)
        );
        getDatafromBE().catch((err) =>
            console.log(err)
        );
    }, [])
    return (
        <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
            <Router>
                <div className='App'>
                    <Navbar />
                    <div className='page-container'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/dogs' element={<DogsPage allDogs={allDogs} />} />
                            <Route path='/checkout' element={<Cart />} />
                        </Routes>
                    </div>
                </div>

            </Router>

        </CartContext.Provider>


    );
}

export default App;
