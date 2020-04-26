import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from "./Tab";

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = tab => {
        if(tab === 'Match'){
            fetch('http://localhost:9000/getUserPerms', {
                method: 'GET',
                credentials: 'include',
            })
            .then(res => {
                return res.json();
            })
            .then(perms => {
                if(perms.userperms === 'admin'){
                    this.setState({ activeTab: tab });
                }
                else {
                    alert("You are not an admin! Permission denied!");
                }
            })
        } else if (tab === 'Log Out') {
            fetch('http://localhost:9000/logout', {
                method: 'GET',
                credentials: 'include',
            })
            .then(() => {
                window.location = "http://localhost:3000";
                
            });
        } else {
            this.setState({ activeTab: tab });
        }
    };

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list">
                    {children.map(child => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map(child => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;