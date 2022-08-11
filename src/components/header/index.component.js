import React from 'react'
import CustomNav from './nav.component'
import CustomTop from './top.component'

export default function CustomHeader() {
    return (
        <div className='custom-header'>
            <CustomTop />
            <CustomNav />
        </div>
    )
}
