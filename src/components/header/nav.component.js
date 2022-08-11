import React from 'react'
import {
    GlobalNavigationBar,
    GlobalNavigationBarRegion,
    IconSettings,
    AppLauncher,
    AppLauncherTile,
    AppLauncherExpandableSection,
    GlobalNavigationBarDropdown,
    GlobalNavigationBarLink,
    Button,
    Icon
} from "@salesforce/design-system-react";
export default function CustomNav() {
    return (
        <IconSettings iconPath="/assets/icons">
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
                    <GlobalNavigationBarLink active label="Home" id="home-link" />
                    <GlobalNavigationBarDropdown
                        assistiveText={{ icon: 'Open menu item submenu' }}
                        id="primaryDropdown"
                        label="Menu Item"
                        options={dropdownCollection}
                    />
                    <GlobalNavigationBarLink label="Menu Item" />
                    <GlobalNavigationBarLink label="Menu Item" />
                    <GlobalNavigationBarLink label="Menu Item" />
                </GlobalNavigationBarRegion>
            </GlobalNavigationBar>
        </IconSettings>)
}

const dropdownCollection = [
    {
        label: 'Menu Item One',
        value: '1',
        iconCategory: 'utility',
        iconName: 'table',
        href: 'http://www.google.com',
    },
    {
        label: 'Menu Item Two',
        value: '2',
        iconCategory: 'utility',
        iconName: 'kanban',
        href: 'http://www.google.com',
    },
    {
        label: 'Menu Item Three',
        value: '3',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com',
    },
];