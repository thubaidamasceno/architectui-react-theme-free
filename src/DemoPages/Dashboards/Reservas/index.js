import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitleAlt2 from "../../../Layout/AppMain/PageTitleAlt2";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import CRMDashboard1 from "./Examples/Variation1";
import CRMDashboard2 from "./Examples/Variation2";

export default class CRMDashboard extends Component {
  render() {
    return ( <CRMDashboard2 />);
    // return (
    //   <Fragment>
    //         <div>
    //           <PageTitleAlt2 heading="Dashboard de Reservas"
    //             subheading="Veja aqui todas as reservas."
    //             icon="pe-7s-graph icon-gradient bg-ripe-malin"/>
    //           <Tabs defaultActiveKey="1"
    //             renderTabBar={() => <ScrollableInkTabBar />}
    //             renderTabContent={() => <TabContent />}>
    //             <TabPane tab="Variation 1" key="1">
    //               <CRMDashboard2 />
    //             </TabPane>
    //             <TabPane tab="Variation 2" key="2">
    //               <CRMDashboard1 />
    //             </TabPane>
    //           </Tabs>
    //         </div>
    //   </Fragment>
    // );
  }
}
