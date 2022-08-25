import { BrandBand } from '@salesforce/design-system-react'
import React from 'react'
import Account from '../components/accounts/account.component'
import CustomTab from '../components/tabs/index.component'

export default function ExchangePage() {
    return (
        <BrandBand id="brand-band-large" size="large"
            theme="lightning-blue">
            <div className='homepage'>
                <Account />
                <CustomTab page="exchanges" />
            </div>
        </BrandBand>
    )
}
