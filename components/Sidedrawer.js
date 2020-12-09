import React,{useContext} from 'react'
import { GlobalContext } from "../context/globalState";
import Link from "next/link"
export default function Sidedrawer({ show,setOpenDrawer  }) {
    const { wishlist } = useContext(GlobalContext);
    let drawer_class = ['side-drawer'];
    if (show) {
        drawer_class.push('open')
    }
    return (
        <nav className={drawer_class.join(' ')}>
            <ul className="list-main">
            <Link href="/" >
                    <li className="list-comp" onClick={()=>setOpenDrawer(false)}>Home</li>
                    </Link>
                <li className="list-comp">About</li>
                <Link href="/wishlist" >
                    <li className="list-comp" onClick={()=>setOpenDrawer(false)}>Wishlist - {wishlist.length}</li>
                    </Link>
            </ul>
       </nav>
    )
}
