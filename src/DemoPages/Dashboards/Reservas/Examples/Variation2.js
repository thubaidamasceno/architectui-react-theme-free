import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classnames from "classnames";
import DataTable from 'react-data-table-component';

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";

import { useState, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

// import "ag-grid-community/styles/ag-grid.css"; // Core CSS
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

import 'ag-grid-enterprise/styles/ag-grid.css'
import 'ag-grid-enterprise/styles/ag-theme-balham.css'
{/* */ }
{/* */ }

const GridExample = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete', pinned: 'left' },
    { field: 'age', pinned: 'left' },
    {
      field: 'country',
      colSpan: (params) => {
        const country = params.data.country;
        if (country === 'Russia') {
          // have all Russia age columns width 2
          return 2;
        } else if (country === 'United States') {
          // have all United States column width 4
          return 4;
        } else {
          // all other rows should be just normal
          return 1;
        }
      },
    },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      width: 150,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={gridStyle}
        className={
          "ag-theme-balham"
        }
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};
const GridExamplex = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
    { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
    { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" }
  ]);

  return (
    // Container
    <div

      className={
        "ag-theme-balham"
      }
      style={{ width: '100%', height: '100%' }}
    >
      {/* The AG Grid component */}
      <AgGridReact
        columnDefs={colDefs}
        rowData={rowData}
      // columnDefs={colDefs} 
      />
    </div>
  )

}

const data55 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data22 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data3 = [
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
];

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      data: makeData(),
    };
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        name: "First Name",
        selector: row => row.firstName,
        sortable: true,
      },
      {
        name: "Last Name",
        id: "lastName",
        selector: row => row.lastName,
        sortable: true,
      },

      {
        name: "Age",
        selector: row => row.age,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },

      {
        name: "Visits",
        selector: row => row.visits,
        sortable: true,
      },
    ];
    return (<GridExamplex></GridExamplex>);
  //   return (
  //     <Fragment>
  //           <div>
  //             <Card className="main-card mb-3">
  //               <CardHeader className="card-header-tab">
  //                 <div className="card-header-title font-size-lg text-capitalize fw-normal">
  //                   <i className="header-icon lnr-dice me-3 text-muted opacity-6"> {" "} </i>
  //                   Easy Dynamic Tablesy
  //                 </div>
  //                 <div className="btn-actions-pane-right actions-icon-btn">
  //                   <UncontrolledButtonDropdown>
  //                     <DropdownToggle className="btn-icon btn-icon-only" color="link">
  //                       <i className="pe-7s-menu btn-icon-wrapper" />
  //                     </DropdownToggle>
  //                     <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
  //                       <DropdownItem header>Header</DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-inbox"> </i>
  //                         <span>Menus</span>
  //                       </DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-file-empty"> </i>
  //                         <span>Settings</span>
  //                       </DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-book"> </i>
  //                         <span>Actions</span>
  //                       </DropdownItem>
  //                       <DropdownItem divider />
  //                       <div className="p-3 text-end">
  //                         <Button className="me-2 btn-shadow btn-sm" color="link">
  //                           View Details
  //                         </Button>
  //                         <Button className="me-2 btn-shadow btn-sm" color="primary">
  //                           Action
  //                         </Button>
  //                       </div>
  //                     </DropdownMenu>
  //                   </UncontrolledButtonDropdown>
  //                 </div>
  //               </CardHeader>
  //               <CardBody>
  //                 <GridExamplex />
  //               </CardBody>
  //             </Card>
  //             <Card className="main-card mb-3">
  //               <CardHeader className="card-header-tab">
  //                 <div className="card-header-title font-size-lg text-capitalize fw-normal">
  //                   <i className="header-icon lnr-dice me-3 text-muted opacity-6"> {" "} </i>
  //                   Easy Dynamic Tablesw
  //                 </div>
  //                 <div className="btn-actions-pane-right actions-icon-btn">
  //                   <UncontrolledButtonDropdown>
  //                     <DropdownToggle className="btn-icon btn-icon-only" color="link">
  //                       <i className="pe-7s-menu btn-icon-wrapper" />
  //                     </DropdownToggle>
  //                     <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
  //                       <DropdownItem header>Header</DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-inbox"> </i>
  //                         <span>Menus</span>
  //                       </DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-file-empty"> </i>
  //                         <span>Settings</span>
  //                       </DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-book"> </i>
  //                         <span>Actions</span>
  //                       </DropdownItem>
  //                       <DropdownItem divider />
  //                       <div className="p-3 text-end">
  //                         <Button className="me-2 btn-shadow btn-sm" color="link">
  //                           View Details
  //                         </Button>
  //                         <Button className="me-2 btn-shadow btn-sm" color="primary">
  //                           Action
  //                         </Button>
  //                       </div>
  //                     </DropdownMenu>
  //                   </UncontrolledButtonDropdown>
  //                 </div>
  //               </CardHeader>
  //               <CardBody>
  //                 <DataTable data={data}
  //                   columns={columns}
  //                   pagination
  //                   fixedHeader
  //                   fixedHeaderScrollHeight="400px"
  //                 />

  //               </CardBody>
  //             </Card>
  //             <Card className="main-card mb-3">
  //               <CardHeader className="card-header-tab">
  //                 <div className="card-header-title font-size-lg text-capitalize fw-normal">
  //                   <i className="header-icon lnr-dice me-3 text-muted opacity-6"> {" "} </i>
  //                   Easy Dynamic Tablesv
  //                 </div>
  //                 <div className="btn-actions-pane-right actions-icon-btn">
  //                   <UncontrolledButtonDropdown>
  //                     <DropdownToggle className="btn-icon btn-icon-only" color="link">
  //                       <i className="pe-7s-menu btn-icon-wrapper" />
  //                     </DropdownToggle>
  //                     <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
  //                       <DropdownItem header>Header</DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-inbox"> </i>
  //                         <span>Menus</span>
  //                       </DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-file-empty"> </i>
  //                         <span>Settings</span>
  //                       </DropdownItem>
  //                       <DropdownItem>
  //                         <i className="dropdown-icon lnr-book"> </i>
  //                         <span>Actions</span>
  //                       </DropdownItem>
  //                       <DropdownItem divider />
  //                       <div className="p-3 text-end">
  //                         <Button className="me-2 btn-shadow btn-sm" color="link">
  //                           View Details
  //                         </Button>
  //                         <Button className="me-2 btn-shadow btn-sm" color="primary">
  //                           Action
  //                         </Button>
  //                       </div>
  //                     </DropdownMenu>
  //                   </UncontrolledButtonDropdown>
  //                 </div>
  //               </CardHeader>
  //               <CardBody><div style={{ width: '100%', height: '800px', }}><GridExample /></div>
  //               </CardBody>
  //             </Card>
  //           </div>
  //     </Fragment>
  //   );
  }
}
