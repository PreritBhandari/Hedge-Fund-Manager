import React from 'react'
import AssetBreakdown from '../charts/asset_breakdown.component'
import AssetPrice from '../charts/asset_price.component'
import DefiPerformanceChart from '../charts/defi_performance.component'
import CustomPieChart from '../charts/piechart.component'

export default function Overview() {
    return (
        <div>
            <div className='row1_overview'>
                <DefiPerformanceChart />
                <AssetBreakdown />
            </div>
            <div className='row2_overview'>
                <CustomPieChart />
                <AssetPrice />
                <CustomPieChart />
            </div>
        </div>
    )
}
