import React from 'react'
import {
    GlobalNavigationBar,
    GlobalNavigationBarRegion,
    AppLauncher,
    AppLauncherTile,
    AppLauncherExpandableSection,
    GlobalNavigationBarDropdown,
    GlobalNavigationBarLink,
    Button,
    Icon,
    IconSettings
} from "@salesforce/design-system-react";
import standardSprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import { Link, useLocation } from 'react-router-dom';

export default function CustomNav() {

    const location = useLocation()
    const path = location.pathname
    return (
        <GlobalNavigationBar>
            <GlobalNavigationBarRegion region="primary">
                <AppLauncher
                    id="app-launcher-trigger"
                    triggerName="Hedge Fund Manager"
                    onSearch={() => {
                        console.log('Search term:');
                    }}
                    modalHeaderButton={<Button label="App Exchange" />}
                >
                    <AppLauncherExpandableSection title="Tile Section">
                        <AppLauncherTile
                            title="Marketing Cloud"
                            iconText="MC"
                            description="Send emails, track emails, read emails! Emails!"
                        />
                        <AppLauncherTile
                            title="Call Center"
                            description="The key to call center and contact center is not to use too many words!"
                            descriptionHeading="Call Center"
                            iconText="CC"
                        />
                    </AppLauncherExpandableSection>
                    <AppLauncherExpandableSection title="Small Tile Section">
                        <AppLauncherTile
                            title="Journey Builder"
                            iconText="JB"
                            size="small"
                        />
                        <AppLauncherTile
                            title="Sales Cloud"
                            iconNode={
                                <Icon name="campaign" category="standard" size="large" />
                            }
                            size="small"
                        />
                    </AppLauncherExpandableSection>
                </AppLauncher>
            </GlobalNavigationBarRegion>
            <GlobalNavigationBarRegion region="secondary" navigation>
                <IconSettings utilitySprite={standardSprite}>
                        {path === "/" ?
                            <GlobalNavigationBarLink active label="Home" id="home-link" />
                            :
                            <GlobalNavigationBarLink label="Home" id="home-link" />
                        }
                    <GlobalNavigationBarDropdown
                        id="primaryDropdown"
                        label="Defi"
                        options={dropdownCollection}
                    />
                    <Link to={"/exchange"}>
                        {path === "/exchange" ?

                            <GlobalNavigationBarDropdown
                                id="primaryDropdown"
                                label="Exchanges"
                                active
                                options={dropdownCollection}
                            />
                            :
                            <GlobalNavigationBarDropdown
                                id="primaryDropdown"
                                label="Exchanges"
                                options={dropdownCollection}
                            />
                        }

                    </Link>
                    <GlobalNavigationBarLink label="Dashboards" />
                    <GlobalNavigationBarLink label="Assets" />
                    <GlobalNavigationBarLink label="Reports" />
                    <GlobalNavigationBarLink label="Snapshots" />
                    <GlobalNavigationBarLink label="Clients" />
                </IconSettings>

            </GlobalNavigationBarRegion>
        </GlobalNavigationBar>
    )
}

const dropdownCollection = [
    {
        label: 'Overview',
        value: '1',
        iconCategory: 'utility',
        iconName: 'table',
        href: '/exchange',
    },
    {
        label: 'Transactions',
        value: '2',
        iconCategory: 'utility',
        iconName: 'kanban',
        href: 'http://www.google.com',
    },
    {
        label: 'Spot Balances',
        value: '3',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com',
    },
    {
        label: 'Future Balances',
        value: '4',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com',
    },
    {
        label: 'Exchanges',
        value: '5',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com',
    },
    {
        label: 'Add Exchange',
        value: '6',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com',
    },
];