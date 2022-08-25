import React from 'react';

import { Tabs, TabsPanel } from '@salesforce/design-system-react';
import Protocols from './protocols.component';

export default function CustomTab({ page }) {
    return (
        <Tabs id="tab-default" defaultSelectedIndex={1}>
            <TabsPanel disabled label="Overview">Item One Content</TabsPanel>
            <TabsPanel label={page === "homepage" ? "Protocols" : "Snapshots"}>
                {page === "homepage" ? <Protocols /> : null}
            </TabsPanel>
            <TabsPanel disabled label="Transaction History">Item Three Content</TabsPanel>
            <TabsPanel disabled label="Chain">Item Three Content</TabsPanel>
            <TabsPanel disabled label="Assets">Item Three Content</TabsPanel>
            <TabsPanel disabled label="Snapshots">Item Three Content</TabsPanel>
            <TabsPanel disabled label="More">Item Three Content</TabsPanel>
        </Tabs>
    );
}
