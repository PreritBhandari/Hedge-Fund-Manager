import React from 'react';
import { DataTable, DataTableCell, DataTableColumn, ExpandableSection, IconSettings } from '@salesforce/design-system-react';
import standardSprite from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';
import Expandable from './expandable.component';
import SimpleBarChart from '../charts/simplebar.component';


const protocolData = require("../../dummyDatas/index.json")

class Protocols extends React.Component {

    state = {
        sortColumn: 'opportunityName',
        sortColumnDirection: {
            opportunityName: 'asc',
        },
        items: [
            {
                id: '0',
                protocolName: <Expandable name="Aave" />,
                balance: '$ 1,254,345.34',
                tokens: 'Acme',
                rewards: '$ 4,345.34',
                lastTransactionDate: '09/16/2020 23:43:23',
            },

            {
                id: '1',
                protocolName: <Expandable name="Balancer" />,
                balance: '$ 1,254,345.34',
                tokens: 'Acme',
                rewards: '$ 4,345.34',
                lastTransactionDate: '10/16/2020 23:43:23',
            },

            {
                id: '2',
                protocolName: <Expandable name="Balancer" />,
                balance: '$ 1,254,345.34',
                tokens: 'Acme',
                rewards: '$ 4,345.34',
                lastTransactionDate: '10/16/2020 23:43:23',
            },
            {
                id: '3',
                protocolName: <Expandable name="Tomb" />,
                balance: '$ 1,254,345.34',
                tokens: 'Acme',
                rewards: '$ 4,345.34',
                lastTransactionDate: '10/16/2020 23:43:23',
            },
            {
                id: '4',
                protocolName: <Expandable name="Tomb" />,
                balance: '$ 1,254,345.34',
                tokens: 'Acme',
                rewards: '$ 4,345.34',
                lastTransactionDate: '10/16/2020 23:43:23',
            },
            {
                id: '5',
                protocolName: <Expandable name="Tomb" />,
                balance: '$ 1,254,345.34',
                tokens: 'Acme',
                rewards: '$ 4,345.34',
                lastTransactionDate: '10/16/2020 23:43:23',
            },

        ],
        selection: [],
    };

    handleChanged = (event, data) => {
        this.setState({ selection: data.selection });
        console.log(event, data);
    };

    handleRowAction = (item, action) => {
        console.log(item, action);
    };

    handleSort = (sortColumn, ...rest) => {
        if (this.props.log) {
            this.props.log('sort')(sortColumn, ...rest);
        }

        const sortProperty = sortColumn.property;
        const { sortDirection } = sortColumn;
        const newState = {
            sortColumn: sortProperty,
            sortColumnDirection: {
                [sortProperty]: sortDirection,
            },
            items: [...this.state.items],
        };

        // needs to work in both directions
        newState.items = newState.items.sort((a, b) => {
            let val = 0;

            if (a[sortProperty] > b[sortProperty]) {
                val = 1;
            }
            if (a[sortProperty] < b[sortProperty]) {
                val = -1;
            }

            if (sortDirection === 'desc') {
                val *= -1;
            }

            return val;
        });

        this.setState(newState);
    };

    render() {
        return (
            <div
                style={{
                    width: "100%",
                    display: "flex"
                }}
            >
                <div style={{
                    width: "65%",
                    height: "auto"
                }}>

                    <IconSettings utilitySprite={standardSprite}>
                        <DataTable
                            assistiveText={{
                                actionsHeader: 'actions',
                                columnSort: 'sort this column',
                                columnSortedAscending: 'asc',
                                columnSortedDescending: 'desc',
                                selectAllRows: 'Select all rows',
                                selectRow: 'Select this row',
                            }}
                            fixedHeader
                            fixedLayout
                            keyboardNavigation
                            items={this.state.items}
                            id="DataTableExample-FixedHeaders"
                            onRowChange={this.handleChanged}
                            onSort={this.handleSort}
                            selection={this.state.selection}
                            selectRows="checkbox"
                        >
                            <DataTableColumn
                                isSorted={this.state.sortColumn === 'opportunityName'}
                                label="Protocol"
                                property='protocolName'
                                primaryColumn
                                sortable
                                sortDirection={this.state.sortColumnDirection.opportunityName}
                            >
                            </DataTableColumn>
                            <DataTableColumn label="Balance" property="balance" />
                            <DataTableColumn label="Tokens" property="token" />
                            <DataTableColumn label="Rewards" property="rewards" />
                            <DataTableColumn
                                isSorted={this.state.sortColumn === 'opportunityName'}
                                label="Last Transaction Date"
                                property="lastTransactionDate"
                                sortable
                                sortDirection={this.state.sortColumnDirection.confidence}
                            />
                        </DataTable>
                    </IconSettings>
                </div>
                <div style={{
                    width: "35%",
                    marginLeft: 20,
                    padding: 10,
                }}>
                    <SimpleBarChart />
                </div>

            </div>
        );
    }
}

export default Protocols;