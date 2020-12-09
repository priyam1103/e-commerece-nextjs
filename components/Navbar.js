import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { GlobalContext } from "../context/globalState";
import { faShoppingCart,faBars,faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Navbar({ setOpenDrawer, open_drawer, data }) {
    
    const { cart } = useContext(GlobalContext);
    const [check_data,setCheckData] = React.useState(data)
    
    const [search_data, setSearchData] = React.useState([]);

    async function searchFunction(val) {
        if (val == "") {
            setSearchData([])
        } else {
            if (val.toString().length > 2) {
                if (check_data != undefined) {
                    let arr1 = await check_data.filter(index => index.title.toString().toLowerCase().includes(val.toString().toLowerCase()));
                    setSearchData(arr1)
                }
            }
        }
        
    }
    return (
        <div className="navbar">
            
            <div className="nav-start">
                <FontAwesomeIcon icon={faBars} color="white" size="lg" onClick={() => { setOpenDrawer(!open_drawer) }}
                    style={{ cursor: "pointer" }} />
                <Link href="/">
                    <p className="logo">Shopify</p>
                    </Link>
            </div>
            <div className="navbar-main">
        

<select  className="nav-select">
  <option >Shop by</option>
  <option value="men">Men's clothing</option>
  <option value="women">Women's clothing</option>
                    <option value="electronics">Eelectronics</option>
                    <option value="jewelery">Jewelery</option>
                    
                </select>
                <div style={{display:"flex",flexDirection:"column",height:50}}>
                    <input className="search-input" placeholder="Search your product here...." type="text"
                        onChange={(e) =>searchFunction(e.target.value)}/>
                    {search_data.length > 0 &&
                        <div style={{ backgroundColor: "white" }} className="suggestion">
                       
                            
                        {search_data.map((item, index) => (
                            <Link href={`/product/${item.id}`} key={index}>
                                <p className="search-item">{item.title}</p>
                                </Link>
                            ))}
                            
                        </div>}
                    </div>
                    <FontAwesomeIcon icon={faSearch} color="white" size="lg"  className="nav-search"
                    style={{ cursor: "pointer" }} />
            </div>
            <div className="nav-options">
                <div className="nav-comp">
                <p className="nav-hello">
                    Hello, Priyam
                </p>
                </div>
                
                <div className="nav-comp">
                <Link href="/orders">
                <p className="nav-order">
                            Orders
                </p>
                        </Link>
            </div>
                <div className="nav-comp">
                    <Link href="/cart">
                <p className="nav-cart">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                       <span style={{color:"#cc0000"}}> {cart.length}</span>
                        </p>
                        </Link>
                </div>
                </div>

        </div>
    )
}
