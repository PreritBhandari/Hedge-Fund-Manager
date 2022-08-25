import React, { useState } from 'react';

import { Button, DataTable, DataTableColumn, ExpandableSection, IconSettings } from '@salesforce/design-system-react';
import standardSprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

import log from '@salesforce/design-system-react/utilities/log';
import List from '@salesforce/design-system-react/lib/components/panel/filtering/list';

const protocolData = require("../../dummyDatas/index.json")

const columns = [
    <DataTableColumn
        key="name"
        label="name"
        property="protocolName"
    >
    </DataTableColumn>
    ,

    <DataTableColumn
        key="balance"
        label="balance"
        property="usdc"
    />,

    <DataTableColumn key="token" label="token" property="token" />,

    <DataTableColumn key="reward" label="reward" property="reward" />,

    <DataTableColumn key="date" label="date" property="date">
    </DataTableColumn>,
];

export default function Expandable({ name }) {

    const [isOpen, setisOpen] = useState(false)

    const openExpandable = () => {
        setisOpen(!isOpen)
        console.log("hello")
    }

    return (
        <IconSettings utilitySprite={standardSprite}>
            <div onClick={openExpandable}
            >
                <ExpandableSection
                    isOpen={isOpen}
                    title={name}
                >
                    <p>
                        <div style={{ width: "123vh" }}>
                            <DataTable
                                items={protocolData}
                                id="DataTableExample-headless"
                                isHeadless

                            >
                                {columns}
                            </DataTable>


                        </div>
                    </p>
                </ExpandableSection>
            </div>
        </IconSettings>
    );
}

