import React from 'react';
import {
    Button,
    ButtonGroup,
    Dropdown,
    IconSettings,
    Icon,
    PageHeader,
    PageHeaderControl
} from "@salesforce/design-system-react";

import standardSprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';


class Account extends React.Component {
    static displayName = 'RecordHomePageHeaderExample';

    render() {
        const actions = () => (
            <React.Fragment>
                <PageHeaderControl>
                    <ButtonGroup variant="list" id="button-group-page-header-actions">
                        <Button label="Add Tag" />
                        <Button label="Edit" />
                        <Button label="Delete" />
                        <IconSettings utilitySprite={standardSprite}>
                            <Dropdown
                                align="right"
                                assistiveText={{ icon: 'More Options' }}
                                iconCategory="utility"
                                iconName="down"
                                iconVariant="border-filled"
                                id="dropdown-record-home-example"
                                options={[
                                    { label: 'Menu Item One', value: 'A0' },
                                    { label: 'Menu Item Two', value: 'B0' },
                                    { label: 'Menu Item Three', value: 'C0' },
                                    { type: 'divider' },
                                    { label: 'Menu Item Four', value: 'D0' },
                                ]}
                            />
                        </IconSettings>
                    </ButtonGroup>
                </PageHeaderControl>
            </React.Fragment>
        );

        const details = [
            {
                label: 'Total Balance',
                content:
                    '$2,325,453.34',
                truncate: true,
            },
            { label: 'Staked Balance', content: '$2,325,453.34', },
            {
                label: 'Liquid Balance',
                content: '$2,325,453.34',
            },
            {
                label: 'Total Balance',
                content: '$2,325,453.34',
                truncate: true,
            },
            {
                label: '24 Hour Change',
                content: '$2,325,453.34',
                truncate: true,
            }, {
                label: 'Week Change',
                content: '$2,325,453.34',
                truncate: true,
            }, {
                label: 'Month Change',
                content: '$2,325,453.34',
                truncate: true,
            }, {
                label: 'YTD Change',
                content: '$2,325,453.34',
                truncate: true,
            },
        ];

        return (
            <PageHeader
                details={details}
                icon={
                    <Icon
                        assistiveText={{ label: 'User' }}
                        category="standard"
                        name="opportunity"
                    />

                }
                label="Accounts"
                onRenderActions={actions}
                title="Trading Wallet"
                variant="record-home"
            />
        );
    }
}

export default Account

