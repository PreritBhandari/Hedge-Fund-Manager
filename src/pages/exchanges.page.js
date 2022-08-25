import React from 'react'
import Account from '../components/accounts/account.component'
import CustomTab from '../components/tabs/index.component'

export default function ExchangePage() {
    return (
        <div className='homepage'>
            <Account />
            <CustomTab page="exchanges"/>
        </div>
    )
}
