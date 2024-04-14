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

import { Document, Page, pdfjs } from "react-pdf";

import Sample from "./Sample";

import { getImageSize, getCrop } from "polotno/utils/image";
import "pdfjs-dist/build/pdf.worker.entry";
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
  const [accordion, setAccordion] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

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
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Formulário</CardTitle>
                      <div id="accordion" className="accordion-wrapper mb-3">
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
                              {1 ? (
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
                              )}
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
                                ["OM", "", 1],
                                ["Sistema", "", 1],
                                ["TAG Equip.", "", 1],
                                ["Descrição resumida do serviço", "", 3],
                                ["Tipo Nota", "", 1],
                                ["IF", "", 1],
                                ["Dt Criação", "", 1],
                                ["Lead Time da Nota", "", 1],
                              ].map((colfield,i) => (
                                <Col md={colfield[2]}>                                  
                                  <FormGroup>
                                      <Label for="exampleCity">
                                      {colfield[0]}
                                      </Label>
                                      <Input
                                        type="text"
                                        name="city"
                                        id="exampleCity"
                                      />
                                    </FormGroup>
                                </Col>
                              ))}
                          </Row>  </CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
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
                            <CardBody></CardBody>
                          </Collapse>
                        </Card>
                      </div>
                    </CardBody>
                  </Card>
                </Container>
              </TabPane>
              <TabPane tab="Desenhos e Diagramas" key="2">
                <PlotnoApp store={store} />
              </TabPane>
              <TabPane tab="Anexos" key="3">
                <div>
                  {/* <PDFReader /> */}
                  <Sample />
                </div>
              </TabPane>
            </Tabs>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default FormsDefault;
