import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";

import "./Tabs.css";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("1");
            }}
            style={{ padding: "1rem" }}
            className={activeTab === "1" && "active m-auto"}
          >
            <h3>Overview</h3>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("2");
            }}
            style={{ padding: "1rem" }}
            className={activeTab === "2" && "active m-auto"}
          >
            <h3>Vision</h3>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("3");
            }}
            style={{ padding: "1rem" }}
            className={activeTab === "3" && "active m-auto"}
          >
            <h3>Mission</h3>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <div className="col-12">
              <center>
                IIT Indore has been recently awarded a grant of INR 100 Cr. by
                DST, Govt. of India to establish a Technology Innovation Hub
                (TIH) on Cyber Physical Systems (CPS) with a focused theme of
                “System Simulation, Modelling and Visualization”. This TIH falls
                under the aegis of the national mission on interdisciplinary
                cyber physical systems and is named DRISHTI-CPS: DRiving
                Innovation through Simulation Hub for Technologies in
                Interdisciplinary Cyber Physical Systems.
                <br /> <br />
                The overarching goal of DRISHTI-CPS is to develop an eco-system
                (see Fig. 1) that will enable knowledge generation through basic
                and applied research and foster an interactive environment where
                innovative products can be developed through joint efforts of
                industry and academia. To achieve this objective DRISHTI-CPS
                willenable technology development, job creation through HRD and
                skill development and create an entrepreneurship and start-up
                ecosystem.
              </center>
            </div>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <div className="col-12">
              <center>
                To become a pioneering center in simulation, modelling and
                visualization of cyber physical systems that will bolster Indian
                manufacturing via development and commercialization of
                state-of-the-art products and creation of skilled human resource
                (at all levels from researchers and entrepreneurs) and become a
                key enabler in catalyzing “Industry 4.0” to realize the vision
                of “Digital India”
              </center>
            </div>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <div className="col-12">
              <center>
                To achieve this vision DRISHTI-CPS invites academic
                institutions, research laboratories, industries and R&D
                organizations to carry out research in the frontline areas
                including but not limited to the following:
                <br />
                <br />
                Modelling, simulation and decision making in cyber physical
                Industrial systems
                <br /> Modeling and performance optimization of Energy systems
                <br />
                CPS-based Prognostics and health management (PHM)
                <br /> Enabling precise and sustainable agriculture using CPS{" "}
                <br />
                Modeling and simulation for Biological and healthcare systems{" "}
                <br />
                Environmental systems modeling <br /> Dynamical systems modeling
                and simulation
                <br /> Modeling and simulation of material behavior
                <br /> Social behavior modeling and simulation
              </center>
            </div>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
