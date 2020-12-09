import React from 'react'

export default function Backdrop({setOpenDrawer,open_drawer}) {
    return (
        <div className="backdrop" onClick={() => { setOpenDrawer(!open_drawer) }}>

            
        </div>
    )
}
