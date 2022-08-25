import React from 'react';

import { Tabs, TabsPanel } from '@salesforce/design-system-react';
import Protocols from './protocols.component';


class CustomTab extends React.Component {
    render() {
        return (
            <Tabs id="tab-default" >
                <TabsPanel disabled label="Overview">Item One Content</TabsPanel>
                <TabsPanel label="Protocols">
                    <Protocols />
                </TabsPanel>
                <TabsPanel disabled label="Transaction History">Item Three Content</TabsPanel>
                <TabsPanel disabled label="Chain">Item Three Content</TabsPanel>
                <TabsPanel disabled label="Assets">Item Three Content</TabsPanel>
                <TabsPanel disabled label="Snapshots">Item Three Content</TabsPanel>
                <TabsPanel disabled label="More">Item Three Content</TabsPanel>
            </Tabs>
        );
    }
}

export default CustomTab