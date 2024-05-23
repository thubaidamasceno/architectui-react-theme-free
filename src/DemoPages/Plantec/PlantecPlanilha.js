import "./PlantecPlanilha.css";

import "ag-grid-enterprise";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-enterprise/styles/ag-grid.css";
import "ag-grid-enterprise/styles/ag-theme-balham.css";

const PlantecPlanilha = ({ dados }) => {
  let printVersion = true;
  return (
    <div
      className="d-flex justify-content-center text-center"
    >
      <table
        border={0}
        id="plantecTable"
        // cellPadding={0}
        cellSpacing={0}
        // width={1200}
        style={{ width: "960px" }}
      //className="p-4"
      ><colgroup>
          {
            [...Array(48).keys()].map((a) =>
            (<col
              //class="xl161"
              style={{ width: "20px" }}
            // //style={{width:"71pt"}}
            />)
            )
          }

        </colgroup>
        <tbody>
          <tr height={79}>
            <td
              height={79}
              align="left"
              valign="top"
              className="xl102"
              colSpan={15}
            ><div className="app-logo-petrobras" /></td>
            <td
              colSpan={20}
              className="xl255"
            >
              PLANEJAMENTO DE SERVIÇOS
            </td>
            <td
              colSpan={13}
              className="xl253"
            >
              UN-BS/ATP-TUPI/MIED
            </td>
          </tr>
          <tr
            className="xl106"
            height={20}
          >
            <td
              height={20}
              className="xl106"
              colSpan={8}
            //style="height:15.0pt"
            >
              Versão/Revisão:
            </td>
            <td className="xl106c" align="right"
              colSpan={2}
              contentEditable>
              2
            </td>
            <td
              className="xl108"
              colSpan={14}
            >
              Nome do Arquivo:
            </td>
            <td
              className="xl110"
              colSpan={24}
            //style="mso-ignore:colSpan"
            >
              Plantec OM2028532845 rev.2 P-69 (3 ESC MEC GG-5241501B).xlsx
            </td>
          </tr>
          <tr
            height={24}

          //style="mso-height-source:userset;height:18.0pt"
          >
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >
              1. RESPONSÁVEL
            </td>
          </tr>
          <tr
          // height={37}

          >
            <td
              height={37}
              className="xl113"
              colSpan={4}
            //style="height:28.15pt"
            >
              Nome:
            </td>
            <td colSpan={12} className="xl261" contentEditable="true">
              Leonardo Ventura Ferraz
            </td>
            <td className="xl114"
              colSpan={3}>Chave:</td>
            <td
              className="xl116"
              contentEditable
              colSpan={3}
            >
              BIJX
            </td>
            <td
              colSpan={5}
              className="xl262"

            //style="width:132pt"
            >
              Matrícula:
            </td>
            <td
              colSpan={5}
              contentEditable
              className="xl116"
            // style="border-right:1.0pt solid black;width:269pt"
            >
              48940627
            </td>
            <td
              colSpan={6}
              className="xl262"

            //style="width:132pt"
            >Responsável Substituto:
            </td>
            <td
              colSpan={10}
              contentEditable
              className="xl263"
            // style="border-right:1.0pt solid black;width:269pt"
            >José Renato</td>
          </tr>
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >2. IDENTIFICAÇÃO GERAL DOS SERVIÇOS - NOTAS PM
            </td>
          </tr>
          {
            [1, 2].map(a => (
              <tr>{
                [
                  ["Plataforma", 3, "xl263", true],
                  ["Nota", 4, "xl263", true],
                  ["OM", 4, "xl263", true],
                  ["Sistema", 4, "xl263", true],
                  ["TAG Equip.", 6, "xl263", true],
                  ["Texto Breve da OM", 12, "xl263", true],
                  ["Tipo Nota", 3, "xl263", true],
                  ["IF", 2, "xl263", true],
                  ["Dt Criação", 5, "xl263", true],
                  ["Lead Time", 5, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2 && b[3]}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>))
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >3. MÃO DE OBRA - NÚCLEO UN-BS - MIED
            </td>
          </tr>
          {
            [1, 2].map(a => (
              <tr>{
                [["Tipo", 4, "xl263", true],
                ["Recurso", 8, "xl263", true],
                ["N° prof.", 3, "xl263", true],
                ["N° dias", 3, "xl263", true],
                ["HH", 3, "xl263", true],
                ["Origem", 6, "xl263", true],
                ["Observações", 21, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2 && b[3]}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>))
          }
          {/* */}
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >4. MÃO DE OBRA - CONTRATOS MIED
            </td>
          </tr>
          {
            [1, 2].map(a => (
              <tr>{
                [
                  ["Contratada", 4, "xl263", true],
                  ["Contrato", 8, "xl263", true],
                  ["N° prof.", 3, "xl263", true],
                  ["N° dias", 3, "xl263", true],
                  ["HH", 3, "xl263", true],
                  ["Origem", 6, "xl263", true],
                  ["Observações", 21, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2 && b[3]}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>))
          }
          {/* */}
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >5. MÃO DE OBRA - APOIOS OUTRAS GERÊNCIAS
            </td>
          </tr>
          {printVersion ?
            [1, 2].map(a => (
              <tr
                className="nolateralpadding">{
                  [["Tipo", 4, "xl263", true],
                  ["Origem", 8, "xl263", true],
                  ["N° prof.", 3, "xl263", true],
                  ["N° dias", 3, "xl263", true],
                  ["HH", 3, "xl263", true],
                  ["Nota SAP", 6, "xl263", true],
                  ["Observações",21, "xl263", true],
                  ].map(b => (<td
                    colSpan={b[1]}
                    contentEditable={a == 2}
                    className={(a == 1) ? "fullborder" : "fullborder"}
                  >{a == 1 ? b[0] : " "}</td>))
                }</tr>)) : (<tr ><td
                  colSpan={48}
                  className="nolateralpadding"
                >
                  <div
                    style={{ height: "10em", width: "100%" }}
                    className={"ag-theme-balham"}
                  >
                    <AgGridReact
                      onRowEditingStopped={(a) => console.log(a)}
                      editType="fullRow"
                      columnDefs={["Tipo",
                        "Origem",
                        "N° prof.",
                        "N° dias",
                        "HH",
                        "Nota SAP",
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
                  </div></td></tr>)
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >6. PLANEJAMENTO BÁSICO DE MATERIAIS
            </td>
          </tr>

          {printVersion ?
            [1, 2].map(a => (
              <tr>{
                [
                  ["FABRICANTE", 4, "xl263", true],
                  ["PART NUMBER", 4, "xl263", true],
                  ["NM", 4, "xl263", true],
                  ["DESCRIÇÃO", 8, "xl263", true],
                  ["Qtd.", 2, "xl263", true],
                  ["UN", 2, "xl263", true],
                  ["UMB", 2, "xl263", true],
                  ["Observações", 10, "xl263", true],
                  ["Impeditivo?", 3, "xl263", true],
                  ["MIRO?", 2, "xl263", true],
                  ["Global?", 2, "xl263", true],
                  ["MRP", 2, "xl263", true],
                  ["Checklist", 3, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>)) : (<tr><td
                colSpan={48}
                className="nolateralpadding">
                <div
                  style={{ height: "10em", width: "100%" }}
                  className={"ag-theme-balham"}
                >
                  <AgGridReact
                    onRowEditingStopped={(a) => console.log(a)}
                    editType="fullRow"
                    columnDefs={[
                      "Impeditivo",
                      "NM",
                      "QTD",
                      "UN",
                      "UMB",
                      "DESCRIÇÃO",
                      "FABRICANTE",
                      "PN",
                      "Observações",
                      "MIRO",
                      "Global",
                      "MRP",
                      "Checklist",
                    ].map((a) => ({
                      ...(typeof a === "string"
                        ? { field: a }
                        : a),
                      editable: true,
                    }))}
                    rowData={[{}]}
                    defaultColDef={{ width: 100 }}
                  />
                </div></td></tr>)
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >LINKS ÚTEIS PARA MATERIAIS
            </td>
          </tr>
          {[["Sistema de Aproveitamento de Estoque - SAE", "http://mvh1120454/"], [
            "Ajuste de NM marcado para eliminação ou estendido", "https://forms.office.com/pages/responsepage.aspx?id=QWJvW1ea5EuOUB36cueaV2iXd9EQ4KtCnqmbtElKmU5URVhEWlpHTzYyOUxOWU5SNTlISDRKTEtCSi4u"
          ], ["Solicitação de Carta de exclusividade", "https://petrobras.service-now.com/cs?id=sc_cat_item&sys_id=43ef84658769bd50aeea42e30cbb359e"],].map(a => (<tr>
            <td
              colSpan={16}
              align="left"
              className="fullborder"
            >{a[0]}
            </td><td
              colSpan={32}
              align="left"
              className="fullborder"
            ><a href={a[1]} target="_blank">{a[1]}</a>
            </td>
          </tr>))}

          {/* */}<tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >7. PLANEJAMENTO DE FERRAMENTAS ESPECIAIS E MOVIMENTAÇÃO DE CARGA
            </td>
          </tr>
          {printVersion ?
            [1, 2].map(a => (
              <tr>{
                [["FABRICANTE", 4, "xl263", true],
                ["KIT", 4, "xl263", true],
                ["DESCRIÇÃO", 10, "xl263", true],
                ["LOCALIZAÇÃO", 4, "xl263", true],
                ["QTD", 3, "xl263", true],
                ["Observações",24, "xl263", true],
              ].map(b => (<td
                colSpan={b[1]}
                contentEditable={a == 2}
                className={(a == 1) ? "fullborder" : "fullborder"}
              >{a == 1 ? b[0] : " "}</td>))
              }</tr>)) : (<tr><td
                colSpan={48}
                className="nolateralpadding">
                <div
                  style={{ height: "10em", width: "100%" }}
                  className={"ag-theme-balham"}
                >
                  <AgGridReact
                    onRowEditingStopped={(a) => console.log(a)}
                    editType="fullRow"
                    columnDefs={["FABRICANTE",
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
                </div></td></tr>)
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >8. SEQUÊNCIA DE SERVIÇOS DE CAMPO - DESMONTAGEM, MONTAGEM, MANUTENÇÃO, TESTES
            </td>
          </tr>
          {printVersion ?
            [1, 2].map(a => (
              <tr>{
                [
                  ["Tarefa", 3, "xl263", true],
                  ["Etapa Aplat", 3, "xl263", true],
                  ["Descrição", 16, "xl263", true],
                  ["Recurso", 9, "xl263", true],
                  ["Nº Rec.", 2, "xl263", true],
                  ["Duração", 2, "xl263", true],
                  ["Unidade", 2, "xl263", true],
                  ["Relação", 4, "xl263", true],
                  ["Predec.", 4, "xl263", true],
                  ["Sucessora",4, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>)) : (<tr><td
                colSpan={48}
                className="nolateralpadding">
                <div
                  style={{ height: "10em", width: "100%" }}
                  className={"ag-theme-balham"}
                >
                  <AgGridReact
                    onRowEditingStopped={(a) => console.log(a)}
                    editType="fullRow"
                    columnDefs={[
                      "Tarefa",
                      "Etapa Aplat",
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
                </div></td></tr>)
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >9. PLANEJAMENTO DA PERMISSÃO DE TRABALHO
            </td>
          </tr>
          {
            [[["DECK", 12, "xl263", true],
            ["MÓDULO", 12, "xl263", true],
            ["ZONA DE SEGURANÇA", 12, "xl263", true],
            ["LOCAL", 12, "xl263", true],], [
              ["Área Responsável", 12, "xl263", true],
              ["Tipo de Permissão de Trabalho", 12, "xl263", true],
              ["Trabalho em Altura?", 12, "xl263", true],
              ["Sobre o Mar?", 12, "xl263", true],], [
              ["Condições", 12, "xl263", true],
              ["Atividade Pará-quedas", 12, "xl263", true],
              ["Demanda Matriz de Bloqueio?", 12, "xl263", true],
              ["Tipo de Bloqueio", 12, "xl263", true],], [
              ["Sistemas Elétricos", 12, "xl263", true],
              ["Situação", 12, "xl263", true],
              ["Tensão", 12, "xl263", true],
              ["Precisa de apoio operacional?", 12, "xl263", true],], [
              ["Sistemas Pressurizados", 12, "xl263", true],
              ["Fluido", 12, "xl263", true],
              ["Pressão", 12, "xl263", true],
              ["Diâmetro Nominal", 12, "xl263", true],

            ]].map(c =>
              [1, 2].map(a => (
                <tr>{
                  c.map(b => (<td
                    colSpan={b[1]}
                    contentEditable={a == 2 && b[3]}
                    className={(a == 1) ? "fullborder" : "fullborder"}
                  >{a == 1 ? b[0] : " "}</td>))
                }</tr>)
              )
            )
          }
          {/* */}
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >10. AVALIAÇÃO DO PROCESSO DE GESTÃO DE MUDANÇA
            </td>
          </tr>
          {
            [1, 2].map(a => (
              <tr>{
                [
                  ["É APLICÁVEL ?", 12, "xl263", true],
                  ["POR QUE?", 12, "xl263", true],
                  ["O QUE FAZER ?", 12, "xl263", true],
                  ["OBSERVAÇÃO", 12, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2 && b[3]}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>))
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >11. PROGRAMAÇÃO PRÉVIA
            </td>
          </tr>
          {
            [1, 2].map(a => (
              <tr>{
                [
                  ["DATA PLANEJADA EXECUÇÃO", 12, "xl263", true],
                  ["LOGÍSTICA DE MATERIAIS", 12, "xl263", true],
                  ["LOGÍSTICA DE FERRAMENTAS", 12, "xl263", true],
                  ["OBSERVAÇÕES", 12, "xl263", true],

                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2 && b[3]}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>))
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >12. NECESSIDADES DE CONTRATAÇÃO DE PEQUENOS SERVIÇOS
            </td>
          </tr>
          {
            [1, 2].map(a => (
              <tr>{
                [
                  ["DATA PLAN. APRES. ET E PPU", 12, "xl263", true],
                  ["DATA REAL.APRES. ET E PPU", 12, "xl263", true],
                  ["DATA DISP. CONTRATAÇÃO", 12, "xl263", true],
                  ["OBSERVAÇÕES", 12, "xl263", true],
                ].map(b => (<td
                  colSpan={b[1]}
                  contentEditable={a == 2 && b[3]}
                  className={(a == 1) ? "fullborder" : "fullborder"}
                >{a == 1 ? b[0] : " "}</td>))
              }</tr>))
          }
          {/* */}
          <tr
            height={24}>
            <td
              colSpan={48}
              height={24}
              className="xl258"
            >13. OBSERVAÇÕES GERAIS
            </td>
          </tr>
          <tr><td
            colSpan={48}
            className="fullborder"
            contentEditable
          >{" "}</td></tr>
          {/* */}
        </tbody>{" "}
      </table>
    </div>
  );
};

export default PlantecPlanilha;
