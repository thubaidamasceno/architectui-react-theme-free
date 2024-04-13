import React, { Fragment } from "react";
import { Route } from "react-router-dom";



// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import FormsDefault from "./FormBasic";


class FormElementsControls extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              {/* <PageTitle heading="Form Controls"
                subheading="Wide selection of forms controls, using the Bootstrap 5 code base, but built with React."
                icon="pe-7s-display1 icon-gradient bg-premium-dark"/> */}
                <FormsDefault />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

const Forms = ({}) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <FormElementsControls/>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Forms;
