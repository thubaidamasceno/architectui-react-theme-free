import React, { Component, Fragment } from "react";
import { useState, useMemo, useRef, useCallback } from 'react';


import 'ag-grid-enterprise'

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

// import "ag-grid-community/styles/ag-grid.css"; // Core CSS
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

import 'ag-grid-enterprise/styles/ag-grid.css'
import 'ag-grid-enterprise/styles/ag-theme-balham.css'

import { defaultColDef } from "../../../../util";
import locale from '../../../../ag-grid-locale.ptbr'

import { db } from '../../../../db';
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";


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

function FriendList({ minAge, maxAge }) {
  const friends = useLiveQuery(
    async () => {
      //
      // Query Dexie's API
      //
      const friends = await db.friends
        .where('age')
        .between(minAge, maxAge)
        .toArray();

      // Return result
      return friends;
    },
    // specify vars that affect query:
    [minAge, maxAge]
  );

  return (
    <ul>
      {friends?.map((friend) => (
        <li key={friend.id}>
          {friend.name}, {friend.age}
        </li>
      ))}
    </ul>
  );
}

const GridExamplex = () => {
  // Row Data: The data to be displayed.
  const gridRef = useRef()

  const rowData = useLiveQuery(
    async () => {
      //
      // Query Dexie's API
      //
      const friends = await db.Materiais.toArray();

      // Return result
      return friends;
    },
    // specify vars that affect query:
    // []
  );

  const colunas = ["Material","NM","Textobrevematerial","Unidmedidabasica","Tipodematerial","Grupodemercadorias","Marcpelimnivdep","Moeda","OutrosIMIlivre","OutrosIMIbloqueado","OutrosIMIoutros","ARMsIMIlivre","ARMsIMIbloqueado","ARMsIMIoutros","P66M0livre","P66M0bloqueado","P66M0outros","P69M0livre","P69M0bloqueado","P69M0outros","P67M0livre","P67M0bloqueado","P67M0outros","OutrosTUPIlivre","OutrosTUPIbloqueado","OutrosTUPIoutros","ARMsTUPIlivre","ARMsTUPIbloqueado","ARMsTUPIoutros","LastUpdate","Ehprimeiracompra","Contratoglobal","Pcsemdemanda","Pccotacaodeserta","Compraanterior","Fornecedoranterior","Observacoes","Moedaanterior","Datapedidoanterior","Pmax","Qtd80k","Qtdmiro","Precoanterior","InLastSAPSync","Documentodecompras","Item","Requisicaodecompra","ItemReqC","Nomedefornecedor","aserfornecidaquantidade","Qtddopedido","Qtdentrada","Codigodeliberacao","Centro","Datadodocumento","Iniciodoprazo","PrevisaodeEntrega","Fimdoprazo","Contratobasico","rn"]

  const colDefs = colunas.map((a, b, c) => ({ ...defaultColDef, field: a }))

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

        embedFullWidthRows={true}
        //
        // getMainMenuItems={generateGetMainMenuItems({
        //   gridId,
        //   _profileId,
        //   setProfileId,
        //   onBtPrint,
        // })}
        // //
        // onFirstDataRendered={onFirstDataRendered}
        ref={gridRef}
        // defaultColDef={defaultColDef}
        sideBar={true}
        // onModelUpdated={onGridColumnsChanged}
        // onGridReady={onGridReady}
        // statusBar={statusBar}
        // columnTypes={columnTypes}
        // excelStyles={excelStyles}
        localeText={locale}
        enableRangeSelection={true}
        rowGroupPanelShow={'always'}
        pivotPanelShow={'always'}
        groupIncludeTotalFooter={true}
        suppressRowHoverHighlight={false}
        tooltipMouseTrack={true}
        //
        columnDefs={colDefs}
        rowData={rowData}
      // {...(detailCellRenderer === 'false'
      //   ? {
      //       //  ref: refx
      //     }
      //   : {
      //       masterDetail: true,
      //       keepDetailRowsCount: 1,
      //       frameworkComponents: frameworkComponents,
      //       detailRowAutoHeight: true,
      //       detailCellRenderer: detailCellRenderer || 'myDetailCellRenderer',
      //     })}


      />
    </div>
  )

}


export default class CRMDashboard2 extends Component {

  render() {
    return (<GridExamplex></GridExamplex>);
  }
}
