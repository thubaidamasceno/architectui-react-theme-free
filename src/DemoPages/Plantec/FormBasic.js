import React, { Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FormsCustomControls from "./CustomControls";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CardHeader,
  Collapse,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import TabBar from "rc-tabs/lib/TabBar";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";

import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import "@blueprintjs/core/lib/css/blueprint.css";
import { createStore } from "polotno/model/store";

import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-enterprise/styles/ag-grid.css";
import "ag-grid-enterprise/styles/ag-theme-balham.css";

import { Page, Document, pdfjs } from "react-pdf";
import Sample from "./Sample";

import { getImageSize, getCrop } from "polotno/utils/image";
import "pdfjs-dist/build/pdf.worker.entry";
import PlantecPlanilha from "./PlantecPlanilha";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// const url_params = new URLSearchParams(window.location.search);
function blobToDataURL(blob, callback) {
  var a = new FileReader();
  a.onload = function (e) {
    callback(e.target.result);
  };
  a.readAsDataURL(blob);
}

const PDFReader = ({ file = "static/datasheet.pdf" }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Página {pageNumber} de {numPages}
      </p>
    </div>
  );
};
const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T", // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});
const page = store.addPage();

export const PlotnoApp = ({ store }) => {
  const workspace = <Workspace store={store} />;

  const uploadImagem = async (image) => {
    let { width, height } = await getImageSize(image);
    let pos = undefined;

    // if (
    //   element &&
    //   element.type === 'svg' &&
    //   element.contentEditable &&
    //   type === 'image'
    // ) {
    //   element.set({ maskSrc: image });
    //   return;
    // }

    // if (
    //   element &&
    //   element.type === 'image' &&
    //   element.contentEditable &&
    //   type == 'image'
    // ) {
    //   const crop = getCrop(element, {
    //     width,
    //     height,
    //   });
    //   element.set({ src: image, ...crop });
    //   return;
    // }

    const scale = Math.min(store.width / width, store.height / height, 1);
    width = width * scale;
    height = height * scale;

    const x = (pos?.x || store.width / 2) - width / 2;
    const y = (pos?.y || store.height / 2) - height / 2;

    store.activePage?.addElement({
      type: "image",
      src: image,
      x,
      y,
      width,
      height,
    });
  };

  const colarImagem = async () => {
    // async function colarImagem (){
    try {
      const clipboardItems = await navigator.clipboard.read();

      try {
        const blobOutput = await clipboardItems[0].getType("image/png");
        const data = URL.createObjectURL(blobOutput);
        await uploadImagem(data);

        // workspace.

        // console.log(data);
        //setImgData(data)
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button onClick={colarImagem}>Colar Imagem</Button>
      <PolotnoContainer
        style={{
          width: "100%",
          //  width: '100vw',
          height: "80vh",
        }}
      >
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} downloadButtonEnabled components={[]} />
          {workspace}
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
};

const FormsDefault = () => {
  const [accordion, setAccordion] = useState(Array(15).fill(true));

  const toggleAccordion = (tab) => {
    const prevState = accordion;
    const xxx = prevState.map((x, index) => (tab === index ? !x : x));
    setAccordion(xxx);
  };
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={500}
          enter={false}
          exit={false}
        >
          <div>
            {/* <PageTitle heading="Form Controls"
              subheading="Wide selection of forms controls, using the Bootstrap 5 code base, but built with React."
              icon="pe-7s-display1 icon-gradient bg-premium-dark" /> */}
            <Tabs
              defaultActiveKey="1"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="Plantec" key="1">
                <Container fluid>
                  <Card className="main-card mb-2">
                    <CardBody>
                      <CardTitle>Formulário</CardTitle>
                      <div id="accordion" className="accordion-wrapper mb-1">
                        <Card>
                          <CardHeader id="headingOne">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(1)}
                              aria-expanded={accordion[1]}
                              aria-controls="collapseOne"
                            >
                              <h5 className="m-0 p-0">1. Responsável</h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[1]}
                            data-parent="#accordion"
                            id="collapseOne"
                            aria-labelledby="headingOne"
                          >
                            <CardBody>
                              <Row>
                                {[
                                  ["Nome do Responsável", "", 5],
                                  ["Chave", "", 1],
                                  ["Matrícula", "", 2],
                                  ["Célula", "", 3],
                                  ["Profissional Backup", "", 5],
                                ].map((colfield, i) => (
                                  <Col md={colfield[2]}>
                                    <FormGroup>
                                      <Label
                                        for=""
                                        height="1.2em"
                                        style={{
                                          height: "1.2em",
                                          width: "100%",
                                          fontWeight: 500,
                                          "text-overflow": "ellipsis",
                                          overflow: "hidden",
                                        }}
                                      >
                                        {colfield[0]}
                                      </Label>
                                      <Input type="text" name="" id="" />
                                    </FormGroup>
                                  </Col>
                                ))}
                              </Row>
                              {/* {1 ? (
                                <Row>
                                  <Col md={4}>
                                    <FormGroup>
                                      <Label for="exampleCity">
                                        Nome do Responsável
                                      </Label>
                                      <Input
                                        type="text"
                                        name="city"
                                        id="exampleCity"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={1}>
                                    <FormGroup>
                                      <Label for="exampleState">Chave</Label>
                                      <Input
                                        type="text"
                                        name="state"
                                        id="exampleState"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={2}>
                                    <FormGroup>
                                      <Label for="exampleZip">Matrícula</Label>
                                      <Input
                                        type="text"
                                        name="zip"
                                        id="exampleZip"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={2}>
                                    <FormGroup>
                                      <Label for="exampleZip">Célula</Label>
                                      <Input
                                        type="text"
                                        name="zip"
                                        id="exampleZip"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="exampleZip">Backup</Label>
                                      <Input
                                        type="text"
                                        name="zip"
                                        id="exampleZip"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              ) : (
                                <Row>
                                  <Col md={4}>
                                    <InputGroup>
                                      <InputGroupText>
                                        Nome Responsável
                                      </InputGroupText>
                                      <Input placeholder="Nome do Responsável" />
                                    </InputGroup>
                                  </Col>
                                  <Col md={1}>
                                    <InputGroup>
                                      <Input placeholder="Chave" />
                                    </InputGroup>
                                  </Col>
                                  <Col md={2}>
                                    <InputGroup>
                                      <InputGroupText>Matrícula</InputGroupText>
                                      <Input placeholder="Matrícula do Responsável" />
                                    </InputGroup>
                                  </Col>
                                  <Col md={2}>
                                    <InputGroup>
                                      <InputGroupText>Célula</InputGroupText>
                                      <Input placeholder="Célula Técnica" />
                                    </InputGroup>
                                  </Col>
                                  <Col md={3}>
                                    <InputGroup>
                                      <InputGroupText>Backup</InputGroupText>
                                      <Input placeholder="Backup do Responsável" />
                                    </InputGroup>
                                  </Col>
                                </Row>
                              )} */}
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(2)}
                              aria-expanded={accordion[2]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                2. IDENTIFICAÇÃO GERAL DOS SERVIÇOS - NOTAS PM
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[2]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <Row>
                                {[
                                  ["Plataforma", "", 1],
                                  ["Núcleo", "", 1],
                                  ["OM", "", 2],
                                  ["Sistema", "", 1],
                                  ["TAG Equip.", "", 2],
                                  ["Descrição resumida do serviço", "", 4],
                                  ["Tipo Nota", "", 1],
                                  ["IF", "", 1],
                                  ["Data. Criação", "", 1],
                                  ["Lead Time da Nota", "", 2],
                                ].map((colfield, i) => (
                                  <Col md={colfield[2]}>
                                    <FormGroup>
                                      <Label
                                        for=""
                                        height="1.2em"
                                        style={{
                                          height: "1.2em",
                                          width: "100%",
                                          fontWeight: 500,
                                          "text-overflow": "ellipsis",
                                          overflow: "hidden",
                                        }}
                                      >
                                        {colfield[0]}
                                      </Label>
                                      <Input type="text" name="" id="" />
                                    </FormGroup>
                                  </Col>
                                ))}
                              </Row>{" "}
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(3)}
                              aria-expanded={accordion[3]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                3. MÃO DE OBRA - NÚCLEO UN-BS - MIED
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[3]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <div
                                style={{ height: "10em", width: "100%" }}
                                className={"ag-theme-balham"}
                              >
                                <AgGridReact
                                  onRowEditingStopped={(a) => console.log(a)}
                                  editType="fullRow"
                                  columnDefs={[
                                    { field: "Tipo" },
                                    { field: "Recurso" },
                                    { field: "N° prof." },
                                    { field: "N° dias" },
                                    { field: "HH" },
                                    { field: "Origem" },
                                    { field: "Observações", width: 200 },
                                  ].map((a) => ({ ...a, editable: true }))}
                                  rowData={[{}]}
                                  defaultColDef={{ width: 100 }}
                                />
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(4)}
                              aria-expanded={accordion[4]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                4. MÃO DE OBRA - CONTRATOS MIED
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[4]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <div
                                style={{ height: "10em", width: "100%" }}
                                className={"ag-theme-balham"}
                              >
                                <AgGridReact
                                  onRowEditingStopped={(a) => console.log(a)}
                                  editType="fullRow"
                                  columnDefs={[
                                    "CONTRATADA",
                                    "Contrato",
                                    "N° prof.",
                                    "N° dias",
                                    "HH",
                                    "Origem",
                                    { field: "Observações", width: 200 },
                                  ].map((a) => ({
                                    ...(typeof a === "string"
                                      ? { field: a }
                                      : a),
                                    editable: true,
                                  }))}
                                  rowData={[{}]}
                                  defaultColDef={{ width: 100 }}
                                />
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(5)}
                              aria-expanded={accordion[5]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                5. MÃO DE OBRA - APOIOS OUTRAS GERÊNCIAS
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[5]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <div
                                style={{ height: "10em", width: "100%" }}
                                className={"ag-theme-balham"}
                              >
                                <AgGridReact
                                  onRowEditingStopped={(a) => console.log(a)}
                                  editType="fullRow"
                                  columnDefs={[
                                    "Tipo",
                                    "Origem",
                                    "N° prof.",
                                    "N° dias",
                                    "HH",
                                    "Nota SAP",
                                    { field: "Observações", width: 200 },
                                  ].map((a) => ({
                                    ...(typeof a === "string"
                                      ? { field: a }
                                      : a),
                                    editable: true,
                                  }))}
                                  rowData={[{}]}
                                  defaultColDef={{ width: 100 }}
                                />
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(6)}
                              aria-expanded={accordion[6]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                6. PLANEJAMENTO BÁSICO DE MATERIAIS
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[6]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <div
                                style={{ height: "10em", width: "100%" }}
                                className={"ag-theme-balham"}
                              >
                                <AgGridReact
                                  onRowEditingStopped={(a) => console.log(a)}
                                  editType="fullRow"
                                  columnDefs={[
                                    "FABRICANTE",
                                    "PART NUMBER",
                                    "NM",
                                    "DESCRIÇÃO",
                                    "Qtd.",
                                    "UMUnidade Básica SAP",
                                    "Observações",
                                    "Impeditivo?",
                                    "MIRO?",
                                    "Global?",
                                    "MRP",
                                  ].map((a) => ({
                                    ...(typeof a === "string"
                                      ? { field: a }
                                      : a),
                                    editable: true,
                                  }))}
                                  rowData={[{}]}
                                  defaultColDef={{ width: 100 }}
                                />
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(7)}
                              aria-expanded={accordion[7]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                7. PLANEJAMENTO DE FERRAMENTAS ESPECIAIS E
                                MOVIMENTAÇÃO DE CARGA
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[7]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <div
                                style={{ height: "10em", width: "100%" }}
                                className={"ag-theme-balham"}
                              >
                                <AgGridReact
                                  onRowEditingStopped={(a) => console.log(a)}
                                  editType="fullRow"
                                  columnDefs={[
                                    "FABRICANTE",
                                    "KIT",
                                    "DESCRIÇÃO",
                                    "LOCALIZAÇÃO",
                                    "QTD",
                                    "Observações",
                                  ].map((a) => ({
                                    ...(typeof a === "string"
                                      ? { field: a }
                                      : a),
                                    editable: true,
                                  }))}
                                  rowData={[{}]}
                                  defaultColDef={{ width: 100 }}
                                />
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(8)}
                              aria-expanded={accordion[8]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                8. SEQUÊNCIA DE SERVIÇOS DE CAMPO - DESMONTAGEM,
                                MONTAGEM, MANUTENÇÃO, TESTES
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[8]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <div
                                style={{ height: "10em", width: "100%" }}
                                className={"ag-theme-balham"}
                              >
                                <AgGridReact
                                  onRowEditingStopped={(a) => console.log(a)}
                                  editType="fullRow"
                                  columnDefs={[
                                    "Tarefa",
                                    "Descrição",
                                    "Recurso",
                                    "Nº Rec.",
                                    "Duração",
                                    "Unidade",
                                    "Relação",
                                    "Predec.",
                                    "Sucessora",
                                  ].map((a) => ({
                                    ...(typeof a === "string"
                                      ? { field: a }
                                      : a),
                                    editable: true,
                                  }))}
                                  rowData={[{}]}
                                  defaultColDef={{ width: 100 }}
                                />
                              </div>
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(9)}
                              aria-expanded={accordion[9]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                9. PLANEJAMENTO DA PERMISSÃO DE TRABALHO
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[9]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              {[
                                [
                                  ["DECK", "", 4],
                                  ["MÓDULO", "", 4],
                                  ["ZONA DE SEGURANÇA", "", 4],
                                  ["LOCAL", "", 4],
                                ],
                                [
                                  ["Área Responsável", "", 4],
                                  ["Tipo de Permissão de Trabalho", "", 4],
                                  ["Trabalho em Altura?", "", 4],
                                  ["Sobre o Mar?", "", 4],
                                ],
                                [
                                  ["Condições", "", 4],
                                  ["Atividade Pará-quedas", "", 4],
                                  ["Demanda Matriz de Bloqueio?", "", 4],
                                  ["Tipo de Bloqueio", "", 4],
                                ],
                                [
                                  ["Sistemas Elétricos", "", 4],
                                  ["Situação", "", 4],
                                  ["Tensão", "", 4],
                                  ["Precisa de apoio operacional?", "", 4],
                                ],
                                [
                                  ["Sistemas Pressurizados", "", 4],
                                  ["Fluido", "", 4],
                                  ["Pressão", "", 4],
                                  ["Diâmetro Nominal", "", 4],
                                ],
                              ].map((a) => (
                                <Row>
                                  {a.map((colfield, i) => (
                                    <Col md={colfield[2]}>
                                      <FormGroup>
                                        <Label
                                          for=""
                                          height="1.2em"
                                          style={{
                                            height: "1.2em",
                                            width: "100%",
                                            fontWeight: 500,
                                            "text-overflow": "ellipsis",
                                            overflow: "hidden",
                                          }}
                                        >
                                          {colfield[0]}
                                        </Label>
                                        <Input type="text" name="" id="" />
                                      </FormGroup>
                                    </Col>
                                  ))}
                                </Row>
                              ))}
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(10)}
                              aria-expanded={accordion[10]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                10. AVALIAÇÃO DO PROCESSO DE GESTÃO DE MUDANÇA
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[10]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              {[
                                [
                                  ["É APLICÁVEL ?", "", 4],
                                  ["POR QUE?", "", 4],
                                  ["O QUE FAZER ?", "", 4],
                                  ["OBSERVAÇÃO", "", 4],
                                ],
                              ].map((a) => (
                                <Row>
                                  {a.map((colfield, i) => (
                                    <Col md={colfield[2]}>
                                      <FormGroup>
                                        <Label
                                          for=""
                                          height="1.2em"
                                          style={{
                                            height: "1.2em",
                                            width: "100%",
                                            fontWeight: 500,
                                            "text-overflow": "ellipsis",
                                            overflow: "hidden",
                                          }}
                                        >
                                          {colfield[0]}
                                        </Label>
                                        <Input type="text" name="" id="" />
                                      </FormGroup>
                                    </Col>
                                  ))}
                                </Row>
                              ))}
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(11)}
                              aria-expanded={accordion[11]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                11. PROGRAMAÇÃO PRÉVIA
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[11]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              {[
                                [
                                  ["DATA PLANEJADA EXECUÇÃO", "", 4],
                                  ["LOGÍSTICA DE MATERIAIS", "", 4],
                                  ["LOGÍSTICA DE FERRAMENTAS", "", 4],
                                  ["OBSERVAÇÕES", "", 4],
                                ],
                              ].map((a) => (
                                <Row>
                                  {a.map((colfield, i) => (
                                    <Col md={colfield[2]}>
                                      <FormGroup>
                                        <Label
                                          for=""
                                          height="1.2em"
                                          style={{
                                            height: "1.2em",
                                            width: "100%",
                                            fontWeight: 500,
                                            "text-overflow": "ellipsis",
                                            overflow: "hidden",
                                          }}
                                        >
                                          {colfield[0]}
                                        </Label>
                                        <Input type="text" name="" id="" />
                                      </FormGroup>
                                    </Col>
                                  ))}
                                </Row>
                              ))}
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(12)}
                              aria-expanded={accordion[12]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                12. NECESSIDADES DE CONTRATAÇÃO DE PEQUENOS
                                SERVIÇOS
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[12]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              {[
                                [
                                  ["DATA PLAN. APRES. ET E PPU", "", 4],
                                  ["DATA REAL.APRES. ET E PPU", "", 4],
                                  ["DATA DISP. CONTRATAÇÃO", "", 4],
                                  ["OBSERVAÇÕES", "", 4],
                                ],
                              ].map((a) => (
                                <Row>
                                  {a.map((colfield, i) => (
                                    <Col md={colfield[2]}>
                                      <FormGroup>
                                        <Label
                                          for=""
                                          height="1.2em"
                                          style={{
                                            height: "1.2em",
                                            width: "100%",
                                            fontWeight: 500,
                                            "text-overflow": "ellipsis",
                                            overflow: "hidden",
                                          }}
                                        >
                                          {colfield[0]}
                                        </Label>
                                        <Input type="text" name="" id="" />
                                      </FormGroup>
                                    </Col>
                                  ))}
                                </Row>
                              ))}
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card>
                          <CardHeader className="b-radius-0" id="headingTwo">
                            <Button
                              block
                              color="link"
                              className="text-start m-0 p-0"
                              onClick={() => toggleAccordion(13)}
                              aria-expanded={accordion[13]}
                              aria-controls="collapseTwo"
                            >
                              <h5 className="m-0 p-0">
                                13. OBSERVAÇÕES GERAIS
                              </h5>
                            </Button>
                          </CardHeader>
                          <Collapse
                            isOpen={accordion[13]}
                            data-parent="#accordion"
                            id="collapseTwo"
                          >
                            <CardBody>
                              <Input
                                type="textarea"
                                name=""
                                id=""
                                style={{ width: "100%", height: "100%" }}
                              />
                            </CardBody>
                          </Collapse>
                        </Card>
                      </div>
                    </CardBody>
                  </Card>
                </Container>
              </TabPane>

              <TabPane tab="Plantec (planilha)" key="2">
                <Container fluid>
                  <Card className="main-card mb-2">
                    <CardBody>
                      <div style={{alignContent:"center",width:"100%"}}>
                      <PlantecPlanilha /></div>
                    </CardBody>
                  </Card>
                </Container>
              </TabPane>
              <TabPane tab="Desenhos e Diagramas" key="3">
                <Container fluid>
                  <Card className="main-card mb-2">
                    <CardBody>
                      <PlotnoApp store={store} />
                    </CardBody>
                  </Card>
                </Container>
              </TabPane>
              <TabPane tab="Anexos" key="4">
                <Container fluid>
                  <Card className="main-card mb-2">
                    <CardBody>
                      <div>
                        {/* <PDFReader /> */}
                        <Sample />
                      </div>
                    </CardBody>
                  </Card>
                </Container>
              </TabPane>
            </Tabs>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default FormsDefault;
