/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import EventUtil from '@salesforce/design-system-react/utilities/event';

import {
    Combobox,
    Dropdown,
    GlobalHeader,
    GlobalHeaderFavorites,
    GlobalHeaderHelp,
    GlobalHeaderNotifications,
    GlobalHeaderProfile,
    GlobalHeaderSearch,
    GlobalHeaderSetup,
    GlobalHeaderTask,
    Popover,
    IconSettings
} from "@salesforce/design-system-react";

import standardSprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';


import logo from '../../assets/images/logo.svg'

/* eslint-disable max-len */
/* eslint-disable react/prop-types */

const ipsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.';

// Notifications content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/#Notifications. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderNotification` content, please create an issue.
const HeaderNotificationsCustomContent = (props) => (
    <ul id="header-notifications-custom-popover-content">
        {props.items.map((item) => (
            <li
                className={`slds-global-header__notification ${item.unread ? 'slds-global-header__notification_unread' : ''
                    }`}
                key={`notification-item-${item.id}`}
            >
                <div className="slds-media slds-has-flexi-truncate slds-p-around_x-small">
                    <div className="slds-media__figure">
                        <span className="slds-avatar slds-avatar_small">
                            <img
                                alt={item.name}
                                src={`/assets/images/${item.avatar}.jpg`}
                                title={`${item.name} avatar"`}
                            />
                        </span>
                    </div>
                    <div className="slds-media__body">
                        <div className="slds-grid slds-grid_align-spread">
                            <a
                                href="#"
                                className="slds-text-link_reset slds-has-flexi-truncate"
                                onClick={(event) => event.preventDefault()}
                            >
                                <h3
                                    className="slds-truncate"
                                    title={`${item.name} ${item.action}`}
                                >
                                    <strong>{`${item.name} ${item.action}`}</strong>
                                </h3>
                                <p className="slds-truncate" title={item.comment}>
                                    {item.comment}
                                </p>
                                <p className="slds-m-top_x-small slds-text-color_weak">
                                    {item.timePosted}{' '}
                                    {item.unread ? (
                                        <abbr
                                            className="slds-text-link slds-m-horizontal_xxx-small"
                                            title="unread"
                                        >
                                            ●
                                        </abbr>
                                    ) : null}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);
HeaderNotificationsCustomContent.displayName =
    'HeaderNotificationsCustomContent';

// Profile content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderProfile` content, please create an issue.
const HeaderProfileCustomContent = (props) => (
    <div id="header-profile-custom-popover-content">
        <div className="slds-m-around_medium">
            <div className="slds-tile slds-tile_board slds-m-horizontal_small">
                <p className="tile__title slds-text-heading_small">Art Vandelay</p>
                <div className="slds-tile__detail">
                    <p className="slds-truncate">
                        <a
                            className="slds-m-right_medium"
                            href="#"
                            onClick={EventUtil.trappedHandler(props.onClick)}
                        >
                            Settings
                        </a>
                        <a href="#" onClick={EventUtil.trappedHandler(props.onClick)}>
                            Log Out
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);
HeaderProfileCustomContent.displayName = 'HeaderProfileCustomContent';

class CustomTop extends React.Component {
    static displayName = 'GlobalHeaderExample';

    constructor(props) {
        super(props);
        this.state = {
            favoritesActionSelected: false,
        };
    }

    render() {
        return (
            <IconSettings utilitySprite={standardSprite}>

                <GlobalHeader
                    logoSrc={logo}
                    onSkipToContent={() => {
                        console.log('>>> Skip to Content Clicked');
                    }}
                    onSkipToNav={() => {
                        console.log('>>> Skip to Nav Clicked');
                    }}
                >
                    <GlobalHeaderSearch
                        combobox={
                            <Combobox
                                assistiveText={{ label: 'Search' }}
                                events={{
                                    onSelect: () => {
                                        console.log('>>> onSelect');
                                    },
                                }}
                                id="header-search-custom-id"
                                labels={{ placeholder: 'Global Search' }}
                                options={[
                                    { id: 'email', label: 'Email' },
                                    { id: 'mobile', label: 'Mobile' },
                                ]}
                            />
                        }
                    />
                    <GlobalHeaderFavorites
                        actionSelected={this.state.favoritesActionSelected}
                        onToggleActionSelected={(event, data) => {
                            this.setState({ favoritesActionSelected: !data.actionSelected });
                        }}
                        popover={
                            <Popover
                                ariaLabelledby="favorites-heading"
                                body={
                                    <div>
                                        <h2
                                            className="slds-text-heading_small"
                                            id="favorites-heading"
                                        >
                                            Favorites
                                        </h2>
                                        {ipsum}
                                    </div>
                                }
                                id="header-favorites-popover-id"
                            />
                        }
                    />
                    <GlobalHeaderTask
                        dropdown={
                            <Dropdown
                                id="header-task-dropdown-id"
                                options={[
                                    { id: 'taskOptionOne', label: 'Task Option One' },
                                    { id: 'taskOptionTwo', label: 'Task Option Two' },
                                ]}
                            />
                        }
                    />
                    <GlobalHeaderHelp
                        popover={
                            <Popover
                                ariaLabelledby="help-heading"
                                body={
                                    <div>
                                        <h2 className="slds-text-heading_small" id="help-heading">
                                            Help and Training
                                        </h2>
                                        {ipsum}
                                    </div>
                                }
                                id="header-help-popover-id"
                            />
                        }
                    />
                    <GlobalHeaderSetup
                        dropdown={
                            <Dropdown
                                id="header-setup-dropdown-id"
                                options={[
                                    { id: 'setupOptionOne', label: 'Setup Option One' },
                                    { id: 'setupOptionTwo', label: 'Setup Option Two' },
                                ]}
                            />
                        }
                    />
                    <GlobalHeaderNotifications
                        notificationCount={5}
                        popover={
                            <Popover

                                ariaLabelledby="header-notifications-custom-popover-content"
                                body={
                                    <HeaderNotificationsCustomContent
                                        items={[
                                            {
                                                action: 'mentioned you',
                                                avatar: 'avatar2',
                                                comment:
                                                    '@jrogers Could I please have a review on my presentation deck',
                                                id: 1,
                                                name: 'Val Handerly',
                                                timePosted: '10 hours ago',
                                                unread: true,
                                            },
                                            {
                                                action: 'commented on your post',
                                                avatar: 'avatar3',
                                                comment: 'I totally agree with your sentiment',
                                                id: 2,
                                                name: 'Jon Rogers',
                                                timePosted: '13 hours ago',
                                                unread: true,
                                            },
                                            {
                                                action: 'mentioned you',
                                                avatar: 'avatar2',
                                                comment:
                                                    "@jrogers Here's the conversation I mentioned to you",
                                                id: 3,
                                                name: 'Rebecca Stone',
                                                timePosted: '1 day ago',
                                            },
                                        ]}
                                    />
                                }
                                id="header-notifications-popover-id"
                            />
                        }
                    />
                    <GlobalHeaderProfile
                        popover={
                            <Popover
                                body={<HeaderProfileCustomContent />}
                                id="header-profile-popover-id"
                            />
                        }
                        userName="Art Vandelay"
                    />
                </GlobalHeader>
            </IconSettings>
        );
    }
}

export default CustomTop