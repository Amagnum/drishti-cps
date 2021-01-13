import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';

import './Tabs.css'

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink onClick={() => { toggle('1'); }} className={activeTab === '1' && "active"} >
                        Overview
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('2'); }} className={activeTab === '2' && "active"} >
                        Vision
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('3'); }} className={activeTab === '3' && "active"} >
                        Mission
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <div className="col-12">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt architecto sint voluptates sit similique sunt cupiditate delectus saepe quas ullam asperiores provident, ex natus laborum quidem error? Corrupti facilis illo ipsum, molestias ex consectetur corporis error nisi cum quam sint incidunt, minus necessitatibus quos voluptates iusto illum, dolorem accusamus amet.
                        </div>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <div className="col-12">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id atque perferendis ipsam eveniet? Consequuntur id qui, tenetur, numquam doloremque quia cumque fugiat dolor iure commodi adipisci tempora eos ratione ut quam maxime deleniti sapiente dolores! Repellendus est aliquid velit consequatur! Consequuntur molestiae voluptatibus vitae culpa aliquam architecto vero nobis veniam.
                        </div>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <div className="col-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius corporis deserunt recusandae dolores molestias, quasi aliquid, amet ipsam nulla esse laboriosam. Facere consectetur sint assumenda sit dolorum vero nobis nesciunt repudiandae omnis dolorem at laudantium voluptates est, expedita, saepe architecto molestias odit harum, id dolore. Vitae inventore nostrum nam?
                        </div>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Tabs;