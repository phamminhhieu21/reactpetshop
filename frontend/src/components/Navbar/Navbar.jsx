import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return ( 
        <>
            <div className='Navbar'>
                <Link to='/'  > Trang chủ</Link>
                <Link to='/dogs'> Mua thú cưng</Link>
                <Link to='checkout'>Giỏ Hàng</Link>
            </div>
        </>
     );
}
 
export default Navbar;