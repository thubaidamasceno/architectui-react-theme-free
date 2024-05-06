import "./PlantecPlanilha.css";

const PlantecPlanilha = ({ dados }) => {
  return (
    <div>
      <table
        border={0}
        id = "plantecTable"
        // cellPadding={0}
        cellSpacing={0}
        // width={1200}
        style={{ width: "100%" }}
        className="p-4"
      >
        <tbody>
          <tr height={79}>
            <td
              height={79}
              align="left"
              valign="top"
              className="xl102"
              colSpan={6}
            ><div className="app-logo-petrobras" /></td>
            <td
              colSpan={6}
              className="xl255"
            >
              PLANEJAMENTO DE SERVIÇOS
            </td>
            <td
              colSpan={6}
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
              colSpan={2}
              //style="height:15.0pt"
            >
              Versão/Revisão:
            </td>
            <td className="xl106" align="right" contentEditable>
              2
            </td>
            <td
              className="xl108"
              colSpan={3}
            >
              Nome do Arquivo:
            </td>
            <td
              className="xl110"
              colSpan={10}
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
              colSpan={18}
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
              //style="height:28.15pt"
            >
              Nome:
            </td>
            <td colSpan={6} className="xl261" contentEditable="true">
              Leonardo Ventura Ferraz
            </td>
            <td className="xl114">Chave:</td>
            <td
              className="xl116"
              contentEditable
              //style="width:59pt"
            >
              BIJX
            </td>
            <td
              colSpan={1}
              className="xl262"

              //style="width:132pt"
            >
              Matrícula:
            </td>
            <td
              colSpan={1}
              contentEditable
              className="xl263"
              // style="border-right:1.0pt solid black;width:269pt"
            >
              48940627
            </td>
            <td
              colSpan={1}
              className="xl262"

              //style="width:132pt"
            >Responsável Substituto:
            </td>
            <td
              colSpan={1}
              contentEditable
              className="xl263"
              // style="border-right:1.0pt solid black;width:269pt"
            >José Renato</td>
          </tr>
          {/*
  <tr
    className="xl119"
    height={24}
    style="mso-height-source:userset;height:18.0pt"
  >
    <td
      colSpan={18}
      height={24}
      className="xl266"
      width={1638}
      style="border-right:1.0pt solid black;
height:18.0pt;width:1230pt"
    >
      2. IDENTIFICAÇÃO GERAL DOS SERVIÇOS - NOTAS PM
    </td>

  </tr>
  <tr className="xl125" height={20} style="height:15.0pt">
    <td
      height={20}
      className="xl120"
      style="height:15.0pt;border-top:none"
    >
      Plataforma
    </td>
    <td
      className="xl121"
      style="border-top:none;border-left:none"
    >
      Núcleo
    </td>
    <td
      className="xl122"
      style="border-top:none;border-left:none"
    >
      OM
    </td>
    <td
      className="xl121"
      style="border-top:none;border-left:none"
    >
      Sistema
    </td>
    <td
      className="xl123"
      style="border-top:none;border-left:none"
    >
      TAG Equip.
    </td>
    <td colSpan={6} className="xl122" style="border-left:none">
      Descrição resumida do serviço
    </td>
    <td
      className="xl124"
      style="border-top:none;border-left:none"
    >
      Tipo Nota
    </td>
    <td
      className="xl121"
      style="border-top:none;border-left:none"
    >
      IF
    </td>
    <td colSpan={2} className="xl122" style="border-left:none">
      Dt Criação
    </td>
    <td
      colSpan={3}
      className="xl274"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Lead Time da Nota
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      height={20}
      className="xl126"
      style="height:15.0pt;border-top:none"
    >
      P-69
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      3º Escalão
    </td>
    <td className="xl128">2028532845</td>
    <td className="xl127" style="border-top:none">
      PSGI
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      GG-5241501B
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      3 ESC MEC GG-5241501B
    </td>
    <td className="xl129">Plano</td>
    <td className="xl130" style="border-top:none">
      6
    </td>
    <td colSpan={2} className="xl269" style="border-left:none">
      20/02/2024
    </td>
    <td
      colSpan={3}
      className="xl127"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      ICPM SO JULHO/24
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl131" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl277" style="border-left:none">
      &nbsp;
    </td>
    <td className="xl132" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl132"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl133"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl132"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl132"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl132"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl132"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td className="xl126" style="border-top:none">
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl131"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={6} className="xl272" style="border-left:none">
      &nbsp;
    </td>
    <td
      className="xl132"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td colSpan={2} className="xl247" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl248"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr
    height={24}
    style="mso-height-source:userset;height:18.0pt"
  >
    <td
      colSpan={18}
      height={24}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:18.0pt;width:1230pt"
    >
      3. MÃO DE OBRA - NÚCLEO UN-BS - MIED
    </td>

  </tr>
  <tr className="xl138" height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl256"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      <span style="mso-spacerun:yes"> </span>Tipo
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      Recurso
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      N° prof.
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      N° dias
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      HH
    </td>
    <td className="xl135" style="border-top:none">
      Origem
    </td>
    <td
      colSpan={11}
      className="xl136"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Observações
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl265"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Terceirizado
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      EMM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      1
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      120
    </td>
    <td className="xl139" style="border-top:none">
      MIED
    </td>
    <td
      colSpan={11}
      className="xl240"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Eng. Mied para Execução e Acompanhamento da Intervenção.
    </td>

  </tr>
  <tr height={0} style="display:none">
    <td
      colSpan={2}
      className="xl265"
      style="border-right:.5pt solid black"
    >
      &nbsp;
    </td>
    <td
      className="xl141"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      0
    </td>
    <td className="xl139" style="border-top:none">
      MIED
    </td>
    <td
      colSpan={11}
      className="xl142"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr
    height={24}
    style="mso-height-source:userset;height:18.0pt"
  >
    <td
      colSpan={18}
      height={24}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:18.0pt;width:1230pt"
    >
      4. MÃO DE OBRA - CONTRATOS MIED
    </td>

  </tr>
  <tr className="xl138" height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl256"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      CONTRATADA
    </td>
    <td
      className="xl144"
      style="border-top:none;border-left:none"
    >
      Contrato
    </td>
    <td
      className="xl144"
      style="border-top:none;border-left:none"
    >
      N° prof.
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      N° dias
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      HH
    </td>
    <td
      className="xl145"
      style="border-top:none;border-left:none"
    >
      Origem
    </td>
    <td
      colSpan={11}
      className="xl136"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Observações
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl239"
      style="height:15.0pt"
    >
      Wartsila
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      4600654569
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      1
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      120
    </td>
    <td className="xl139" style="border-top:none">
      MIED
    </td>
    <td
      colSpan={11}
      className="xl240"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Eng. Wartsila para Execução e Acompanhamento da
      Intervenção.
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl239"
      style="height:15.0pt"
    >
      Actemium
    </td>
    <td
      className="xl127"
      style="border-top:none;border-left:none"
    >
      4600671383
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      1
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      120
    </td>
    <td className="xl139" style="border-top:none">
      MIED
    </td>
    <td
      colSpan={11}
      className="xl240"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Engenheiro Eletricista
    </td>

  </tr>
  <tr height={21} style="height:15.75pt">
    <td
      colSpan={18}
      height={21}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.75pt;width:1230pt"
    >
      5. MÃO DE OBRA - APOIOS OUTRAS GERÊNCIAS
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl273"
      style="height:15.0pt"
    >
      Tipo
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      Origem
    </td>
    <td
      className="xl144"
      style="border-top:none;border-left:none"
    >
      N° prof.
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      N° dias
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      HH
    </td>
    <td
      className="xl146"
      style="border-top:none;border-left:none"
    >
      Nota SAP
    </td>
    <td
      colSpan={11}
      className="xl136"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Observações
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl239"
      style="height:15.0pt"
    >
      Andaime
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      MIEE
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      3
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      72
    </td>
    <td className="xl139" style="border-top:none">
      XXXX
    </td>
    <td
      colSpan={11}
      className="xl240"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Montar / Desmontar Andaime
      <span style="mso-spacerun:yes"> </span>
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl239"
      style="height:15.0pt"
    >
      Caldeiraria
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      MIEE
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      4
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      96
    </td>
    <td className="xl139" style="border-top:none">
      XXXX
    </td>
    <td
      colSpan={11}
      className="xl240"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Raquetear linhas
    </td>

  </tr>
  <tr
    height={24}
    style="mso-height-source:userset;height:18.0pt"
  >
    <td
      colSpan={18}
      height={24}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:18.0pt;width:1230pt"
    >
      6. PLANEJAMENTO BÁSICO DE MATERIAIS
    </td>

  </tr>
  <tr
    height={24}
    style="mso-height-source:userset;height:18.0pt"
  >
    <td
      colSpan={2}
      height={24}
      className="xl278"
      width={181}
      style="height:18.0pt;
width:136pt"
    >
      Data de Aplicação:
    </td>
    <td
      colSpan={2}
      className="xl280"
      width={162}
      style="width:121pt"
    >
      02/04/2024
    </td>
    <td
      className="xl147"
      width={103}
      style="border-top:none;width:77pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={62}
      style="border-top:none;width:47pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={85}
      style="border-top:none;width:64pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={167}
      style="border-top:none;width:125pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={89}
      style="border-top:none;width:67pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={78}
      style="border-top:none;width:59pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={86}
      style="border-top:none;width:65pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={91}
      style="border-top:none;width:68pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={78}
      style="border-top:none;width:59pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={97}
      style="border-top:none;width:73pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={77}
      style="border-top:none;width:58pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={75}
      style="border-top:none;width:56pt"
    >
      &nbsp;
    </td>
    <td
      className="xl147"
      width={75}
      style="border-top:none;width:56pt"
    >
      &nbsp;
    </td>
    <td
      className="xl148"
      width={132}
      style="border-top:none;width:99pt"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl243"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      FABRICANTE
    </td>
    <td
      colSpan={2}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      PART NUMBER
    </td>
    <td
      className="xl145"
      style="border-top:none;border-left:none"
    >
      NM
    </td>
    <td
      colSpan={4}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      DESCRIÇÃO
    </td>
    <td className="xl135" style="border-top:none">
      Qtd.
    </td>
    <td className="xl135" style="border-top:none">
      UM
    </td>
    <td
      colSpan={2}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Observações
    </td>
    <td
      className="xl149"
      style="border-top:none;border-left:none"
    >
      Impeditivo
    </td>
    <td
      className="xl145"
      style="border-top:none;border-left:none"
    >
      MIRO?
    </td>
    <td
      className="xl145"
      style="border-top:none;border-left:none"
    >
      Global?
    </td>
    <td
      className="xl136"
      style="border-top:none;border-left:none"
    >
      MRP
    </td>
    <td className="xl150" style="border-top:none">
      Checklist
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      TEADIT
    </td>
    <td
      colSpan={2}
      className="xl246"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      10.039.251
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Gaxeta têxtil aramida quadr. 1/4&quot;
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      1
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      kg
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      HAMWORTHY MOSS
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      11.428.993
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Bico do aspersor p/ger. gás inerte
      <span style="mso-spacerun:yes"> </span>(água do mar)
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      4
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Não-OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      11.767.831
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Bico do aspersor p/ger. gás inerte
      <span style="mso-spacerun:yes"> </span>(água doce)
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      2
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl155"
      width={103}
      style="border-top:none;border-left:none;width:77pt"
    >
      11.767.833
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Bico p/ger. gás inerte
      <span style="mso-spacerun:yes">  </span>(Injeção de
      diesel)
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      1
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Não-OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl155"
      width={103}
      style="border-top:none;border-left:none;width:77pt"
    >
      11.767.835
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Filtro molhado p/ger. gás inerte
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      1
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl155"
      width={103}
      style="border-top:none;border-left:none;width:77pt"
    >
      11.768.772
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Demister p/ger. gás inerte
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      1
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Não-OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl142"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl244"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl155"
      width={103}
      style="border-top:none;border-left:none;width:77pt"
    >
      11.777.430
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Papelão de fibra aram. 3,20x 1500x1600
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      2
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      m2
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl155"
      width={103}
      style="border-top:none;border-left:none;width:77pt"
    >
      12.671.997
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Cone defletor p/ger. gás inerte
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      1
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      OK
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl155"
      width={103}
      style="border-top:none;border-left:none;width:77pt"
    >
      12.672.763
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Junta p/ger. gás inerte
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      14
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      m
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Concluir Checklist
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={2}
      height={20}
      className="xl186"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      WARTSILA
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      12.672.788
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Junta p/ger. gás inerte
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      10
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      m
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      SIM
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Fazer Checklist
    </td>

  </tr>
  <tr
    height={18}
    style="mso-height-source:userset;height:13.5pt"
  >
    <td
      colSpan={2}
      height={18}
      className="xl186"
      style="border-right:.5pt solid black;
height:13.5pt"
    >
      DRAGER
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      11.975.585
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Célula espec. p/det.gás Dräger
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      2
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      NÃO
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Fazer Checklist
    </td>

  </tr>
  <tr
    height={18}
    style="mso-height-source:userset;height:13.5pt"
  >
    <td
      colSpan={2}
      height={18}
      className="xl186"
      style="border-right:.5pt solid black;
height:13.5pt"
    >
      DRAGER
    </td>
    <td
      colSpan={2}
      className="xl188"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      12.920.724
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Detector multigás polytron 8100
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      2
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      NÃO
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      Não
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl154"
      style="border-top:none .5pt solid windowtext;border-right:
1.0pt solid windowtext;border-bottom:.5pt solid windowtext;border-left:.5pt solid windowtext;
background:red;mso-pattern:black none"
    >
      Fazer Checklist
    </td>

  </tr>
  <tr
    height={18}
    style="mso-height-source:userset;height:13.5pt"
  >
    <td
      colSpan={2}
      height={18}
      className="xl186"
      style="border-right:.5pt solid black;
height:13.5pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl186"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl151"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={4}
      className="xl190"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl152"
      width={78}
      style="border-top:none;border-left:none;width:59pt"
    >
      &nbsp;
    </td>
    <td
      className="xl153"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl184"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl142"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.0pt"
  >
    <td
      colSpan={18}
      height={20}
      className="xl289"
      style="border-right:1.0pt solid black;
height:15.0pt"
    >
      LINKS ÚTEIS MATERIAIS
    </td>

  </tr>
  <tr
    height={17}
    style="mso-height-source:userset;height:12.75pt"
  >
    <td
      colSpan={4}
      height={17}
      className="xl285"
      width={343}
      style="height:12.75pt;
width:257pt"
    >
      Sistema de Aproveitamento de Estoque - SAE
    </td>
    <td
      colSpan={14}
      className="xl287"
      width={1295}
      style="border-right:1.0pt solid black;
width:973pt"
    >
      <a href="http://mvh1120454/" target="_parent">
        http://mvh1120454/
      </a>
    </td>

  </tr>
  <tr
    height={17}
    style="mso-height-source:userset;height:12.75pt"
  >
    <td
      colSpan={4}
      height={17}
      className="xl285"
      width={343}
      style="height:12.75pt;
width:257pt"
    >
      Ajuste de NM marcado para eliminação ou estendido
    </td>
    <td
      colSpan={14}
      className="xl287"
      width={1295}
      style="border-right:1.0pt solid black;
width:973pt"
    >
      <a
        href="https://forms.office.com/pages/responsepage.aspx?id=QWJvW1ea5EuOUB36cueaV2iXd9EQ4KtCnqmbtElKmU5URVhEWlpHTzYyOUxOWU5SNTlISDRKTEtCSi4u"
        target="_parent"
      >
        https://forms.office.com/pages/responsepage.aspx?id=QWJvW1ea5EuOUB36cueaV2iXd9EQ4KtCnqmbtElKmU5URVhEWlpHTzYyOUxOWU5SNTlISDRKTEtCSi4u
      </a>
    </td>

  </tr>
  <tr
    height={17}
    style="mso-height-source:userset;height:12.75pt"
  >
    <td
      colSpan={4}
      height={17}
      className="xl285"
      width={343}
      style="height:12.75pt;
width:257pt"
    >
      Solicitação de Carta de exclusividade
    </td>
    <td
      colSpan={14}
      className="xl287"
      width={1295}
      style="border-right:1.0pt solid black;
width:973pt"
    >
      <a
        href="https://petrobras.service-now.com/cs?id=sc_cat_item&amp;sys_id=43ef84658769bd50aeea42e30cbb359e"
        target="_parent"
      >
        https://petrobras.service-now.com/cs?id=sc_cat_item&amp;sys_id=43ef84658769bd50aeea42e30cbb359e
      </a>
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.0pt"
  >
    <td
      colSpan={18}
      height={20}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.0pt;width:1230pt"
    >
      7. PLANEJAMENTO DE FERRAMENTAS ESPECIAIS E MOVIMENTAÇÃO
      DE CARGA
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl293"
      style="height:15.6pt"
    >
      FABRICANTE
    </td>
    <td
      colSpan={2}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      KIT
    </td>
    <td
      colSpan={7}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      DESCRIÇÃO
    </td>
    <td
      colSpan={2}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      LOCALIZAÇÃO
    </td>
    <td
      className="xl145"
      style="border-top:none;border-left:none"
    >
      QTD
    </td>
    <td
      colSpan={4}
      className="xl136"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Observações
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl281"
      style="height:15.6pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl283"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      colSpan={7}
      className="xl240"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl142"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={4}
      className="xl294"
      width={359}
      style="border-right:1.0pt solid black;
border-left:none;width:269pt"
    >
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl312"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl283"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      colSpan={7}
      className="xl240"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl142"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl157"
      width={77}
      style="border-left:none;width:58pt"
    >
      &nbsp;
    </td>
    <td className="xl158" width={75} style="width:56pt">
      &nbsp;
    </td>
    <td className="xl158" width={75} style="width:56pt">
      &nbsp;
    </td>
    <td className="xl159" width={132} style="width:99pt">
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl239"
      style="height:15.6pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={2}
      className="xl142"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td className="xl160"></td>
    <td className="xl160"></td>
    <td className="xl160"></td>
    <td className="xl160"></td>
    <td className="xl161"></td>
    <td className="xl160"></td>
    <td className="xl160"></td>
    <td
      colSpan={2}
      className="xl142"
      style="border-right:.5pt solid black"
    >
      &nbsp;
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      colSpan={4}
      className="xl157"
      width={359}
      style="border-right:1.0pt solid black;
border-left:none;width:269pt"
    >
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={18}
      height={20}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.6pt;width:1230pt"
    >
      8. SEQUÊNCIA DE SERVIÇOS DE CAMPO - DESMONTAGEM,
      MONTAGEM, MANUTENÇÃO, TESTES
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl293"
      style="height:15.6pt"
    >
      Tarefa
    </td>
    <td
      colSpan={6}
      className="xl136"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Descrição
    </td>
    <td colSpan={3} className="xl145" style="border-left:none">
      Recurso
    </td>
    <td className="xl137" style="border-top:none">
      Nº Rec.
    </td>
    <td className="xl146" style="border-top:none">
      Duração
    </td>
    <td
      className="xl134"
      style="border-top:none;border-left:none"
    >
      Unidade
    </td>
    <td
      className="xl144"
      style="border-top:none;border-left:none"
    >
      Relação
    </td>
    <td className="xl135" style="border-top:none">
      Predec.
    </td>
    <td className="xl137" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl150" style="border-top:none">
      Sucessora
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl310"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      1
    </td>
    <td
      colSpan={6}
      className="xl162"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Pré-Interveção
    </td>
    <td
      colSpan={3}
      className="xl300"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl166"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl167" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl168" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl169" style="border-top:none">
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl170"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      1.1
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Raqueteamento<span style="mso-spacerun:yes"> </span>
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      MIEE
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      3
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      24
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-I
    </td>
    <td className="xl139" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      1.2
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      height={20}
      className="xl170"
      style="height:15.6pt;border-top:none"
    >
      &nbsp;
    </td>
    <td className="xl171" style="border-top:none">
      1.2
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Montagem de Andaime
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      :
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      4
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      12
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-I
    </td>
    <td className="xl139" style="border-top:none">
      1.1
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl310"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      2
    </td>
    <td
      className="xl162"
      width={107}
      style="border-top:none;border-left:none;width:80pt"
    >
      GG-5241501A
    </td>
    <td
      className="xl163"
      width={55}
      style="border-top:none;width:41pt"
    >
      &nbsp;
    </td>
    <td
      className="xl163"
      width={103}
      style="border-top:none;width:77pt"
    >
      &nbsp;
    </td>
    <td
      className="xl163"
      width={62}
      style="border-top:none;width:47pt"
    >
      &nbsp;
    </td>
    <td
      className="xl163"
      width={85}
      style="border-top:none;width:64pt"
    >
      &nbsp;
    </td>
    <td
      className="xl164"
      width={167}
      style="border-top:none;width:125pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={3}
      className="xl300"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      &nbsp;
    </td>
    <td
      className="xl173"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl173"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl166"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl174" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl175" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl176" style="border-top:none">
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      height={20}
      className="xl177"
      style="height:15.6pt;border-top:none"
    >
      &nbsp;
    </td>
    <td className="xl171" style="border-top:none">
      2.1
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar bicos de injeção de diesel, substituir conforme
      condição.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl178"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl178"
      style="border-top:none;border-left:none"
    >
      4
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl156" style="border-top:none">
      1.1
    </td>
    <td className="xl179" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl180" style="border-top:none">
      2.2
    </td>

  </tr>
  <tr
    height={23}
    style="mso-height-source:userset;height:17.25pt"
  >
    <td
      colSpan={2}
      height={23}
      className="xl170"
      style="border-right:.5pt solid black;
height:17.25pt"
    >
      2.2
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar bocais de spray de água salgada, substituir
      conforme condição.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      4
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.1
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.3
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl170"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      2.3
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar bocais de spray de água doce, substituir conforme
      condição.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      4
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.2
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.4
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl170"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      2.4
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar bicos de injeção de gás combustível , substituir
      conforme condição.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      6
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.3
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.5
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      height={20}
      className="xl170"
      style="height:15.6pt;border-top:none"
    >
      &nbsp;
    </td>
    <td className="xl171" style="border-top:none">
      2.5
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Inspecionar, limpar peças internas do deck water seal.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      6
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.4
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.6
    </td>

  </tr>
  <tr
    height={22}
    style="mso-height-source:userset;height:16.5pt"
  >
    <td
      colSpan={2}
      height={22}
      className="xl170"
      style="border-right:.5pt solid black;
height:16.5pt"
    >
      2.6
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar elementos filtro molhado, substituir conforme
      condição.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.5
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.7
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl170"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      2.7
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar demister, substituir conforme condição.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.6
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.8
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      height={20}
      className="xl170"
      style="height:15.6pt;border-top:none"
    >
      &nbsp;
    </td>
    <td className="xl171" style="border-top:none">
      2.8
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Limpar Cooling Jacket
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.7
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.9
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      height={20}
      className="xl170"
      style="height:15.6pt;border-top:none"
    >
      &nbsp;
    </td>
    <td className="xl171" style="border-top:none">
      2.9
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Calibrar Sensor de O2 , substituir se necessário.
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      10
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.8
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      2.10
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      height={20}
      className="xl170"
      style="height:15.6pt;border-top:none"
    >
      &nbsp;
    </td>
    <td className="xl171" style="border-top:none">
      2.10
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Partida Assistida do GGI-A
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      Actemium/Wartsila
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      2
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      20
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.9
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      3
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl310"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      3
    </td>
    <td
      colSpan={6}
      className="xl162"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Pós- Intervenção
    </td>
    <td
      colSpan={3}
      className="xl300"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl165"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td
      className="xl166"
      style="border-top:none;border-left:none"
    >
      &nbsp;
    </td>
    <td className="xl167" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl168" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl169" style="border-top:none">
      &nbsp;
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl170"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      3.1
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Desraqueteamento<span style="mso-spacerun:yes"> </span>
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      MIEE
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      4
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      24
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      2.10
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      3.4
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.6pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl170"
      style="border-right:.5pt solid black;
height:15.6pt"
    >
      3.4
    </td>
    <td
      colSpan={6}
      className="xl297"
      width={579}
      style="border-right:.5pt solid black;
border-left:none;width:434pt"
    >
      Desmontagem de Andaime
    </td>
    <td
      colSpan={3}
      className="xl294"
      width={253}
      style="border-right:.5pt solid black;
border-left:none;width:191pt"
    >
      MIEE
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      3
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      12
    </td>
    <td
      className="xl172"
      style="border-top:none;border-left:none"
    >
      H
    </td>
    <td
      className="xl140"
      style="border-top:none;border-left:none"
    >
      I-T
    </td>
    <td className="xl139" style="border-top:none">
      3.1
    </td>
    <td className="xl143" style="border-top:none">
      &nbsp;
    </td>
    <td className="xl154" style="border-top:none">
      &nbsp;
    </td>

  </tr>
  <tr height={21} style="height:15.75pt">
    <td
      colSpan={18}
      height={21}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.75pt;width:1230pt"
    >
      9. PLANEJAMENTO DA PERMISSÃO DE TRABALHO
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl306"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      DECK
    </td>
    <td
      colSpan={4}
      className="xl303"
      style="border-right:.5pt solid black;border-left:
none"
    >
      MÓDULO
    </td>
    <td
      colSpan={5}
      className="xl303"
      style="border-right:.5pt solid black;border-left:
none"
    >
      ZONA DE SEGURANÇA
    </td>
    <td
      colSpan={5}
      className="xl303"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      LOCAL
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl230"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Main Deck
    </td>
    <td
      colSpan={4}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      M Hull
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Zona I
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      M Hull, Sala de GGI
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl232"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Área Responsável
    </td>
    <td
      colSpan={4}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Tipo de Permissão de Trabalho
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Trabalho em Altura?
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Sobre o Mar?
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl230"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      COEMB
    </td>
    <td
      colSpan={4}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      A QUENTE
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      NÃO
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Não
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl232"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Condições
    </td>
    <td
      colSpan={4}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Atividade Pará-quedas
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Demanda Matriz de Bloqueio?
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Tipo de Bloqueio
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.0pt"
  >
    <td
      colSpan={4}
      height={20}
      className="xl230"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Espaço Confinado
    </td>
    <td
      colSpan={4}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Não
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Sim
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Duplo
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl232"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Sistemas Elétricos
    </td>
    <td
      colSpan={4}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Situação
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Tensão
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Precisa de apoio operacional?
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl228"
      style="height:15.0pt"
    >
      Sim
    </td>
    <td colSpan={4} className="xl172" style="border-left:none">
      Energizado
    </td>
    <td colSpan={5} className="xl172" style="border-left:none">
      Entre 50 e 250VCA ou 120 e 250VCC
    </td>
    <td
      colSpan={5}
      className="xl172"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Sim
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl232"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Sistemas Pressurizados
    </td>
    <td
      colSpan={4}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Fluido
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Pressão
    </td>
    <td
      colSpan={5}
      className="xl224"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Diâmetro Nominal
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={4}
      height={20}
      className="xl230"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      Sim<span style="mso-spacerun:yes"> </span>
    </td>
    <td
      colSpan={4}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      <span style="mso-spacerun:yes"> </span>Água Fria/Ar
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:.5pt solid black;border-left:
none"
    >
      <span style="mso-spacerun:yes"> </span>De 12 a 40kgf/cm²
    </td>
    <td
      colSpan={5}
      className="xl205"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      Superior a 4&quot;
    </td>

  </tr>
  <tr height={21} style="height:15.75pt">
    <td
      colSpan={18}
      height={21}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.75pt;width:1230pt"
    >
      10. AVALIAÇÃO DO PROCESSO DE GESTÃO DE MUDANÇA
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.0pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl196"
      style="height:15.0pt"
    >
      É APLICÁVEL ?
    </td>
    <td
      colSpan={6}
      className="xl201"
      style="border-right:.5pt solid black;border-left:
none"
    >
      POR QUE?
    </td>
    <td
      colSpan={5}
      className="xl201"
      style="border-right:.5pt solid black;border-left:
none"
    >
      O QUE FAZER ?
    </td>
    <td
      colSpan={5}
      className="xl201"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      OBSERVAÇÃO
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.0pt"
  >
    <td
      colSpan={2}
      height={20}
      className="xl237"
      style="height:15.0pt"
    >
      Não
    </td>
    <td
      colSpan={6}
      className="xl233"
      style="border-right:.5pt solid black;border-left:
none"
    >
      Manutenção Preventiva
    </td>
    <td
      colSpan={5}
      className="xl233"
      style="border-right:.5pt solid black;border-left:
none"
    >
      N/A
    </td>
    <td
      colSpan={5}
      className="xl233"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      N/A
    </td>

  </tr>
  <tr
    height={20}
    style="mso-height-source:userset;height:15.0pt"
  >
    <td
      colSpan={18}
      height={20}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.0pt;width:1230pt"
    >
      11. PROGRAMAÇÃO PRÉVIA
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={3}
      height={20}
      className="xl196"
      style="height:15.0pt"
    >
      DATA PLANEJADA EXECUÇÃO
    </td>
    <td
      colSpan={4}
      className="xl201"
      style="border-right:.5pt solid black;border-left:
none"
    >
      LOGÍSTICA DE MATERIAIS
    </td>
    <td
      colSpan={5}
      className="xl201"
      style="border-right:.5pt solid black;border-left:
none"
    >
      LOGÍSTICA DE FERRAMENTAS
    </td>
    <td
      colSpan={6}
      className="xl201"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      OBSERVAÇÕES
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={3}
      height={20}
      className="xl198"
      style="border-right:.5pt solid black;
height:15.0pt"
    >
      02/04/2024
    </td>
    <td colSpan={4} className="xl172" style="border-left:none">
      &nbsp;
    </td>
    <td colSpan={5} className="xl172" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={6}
      className="xl205"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={21} style="height:15.75pt">
    <td
      colSpan={18}
      height={21}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.75pt;width:1230pt"
    >
      12. NECESSIDADES DE CONTRATAÇÃO DE PEQUENOS SERVIÇOS
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={3}
      height={20}
      className="xl196"
      style="height:15.0pt"
    >
      DATA PLAN. APRES. ET E PPU
    </td>
    <td colSpan={4} className="xl197" style="border-left:none">
      DATA REAL.APRES. ET E PPU
    </td>
    <td colSpan={5} className="xl197" style="border-left:none">
      DATA DISP. CONTRATAÇÃO
    </td>
    <td
      colSpan={6}
      className="xl197"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      OBSERVAÇÕES
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={3}
      height={20}
      className="xl209"
      style="height:15.0pt"
    >
      &nbsp;
    </td>
    <td
      colSpan={4}
      className="xl211"
      style="border-right:.5pt solid black;border-left:
none"
    >
      &nbsp;
    </td>
    <td colSpan={5} className="xl210" style="border-left:none">
      &nbsp;
    </td>
    <td
      colSpan={6}
      className="xl210"
      style="border-right:1.0pt solid black;border-left:
none"
    >
      &nbsp;
    </td>

  </tr>
  <tr height={21} style="height:15.75pt">
    <td
      colSpan={18}
      height={21}
      className="xl193"
      width={1638}
      style="border-right:1.0pt solid black;
height:15.75pt;width:1230pt"
    >
      13. OBSERVAÇÕES GERAIS
    </td>

  </tr>
  <tr height={20} style="height:15.0pt">
    <td
      colSpan={18}
      rowspan={4}
      height={188}
      className="xl215"
      width={1638}
      style="border-right:
1.0pt solid black;border-bottom:1.0pt solid black;height:141.0pt;width:1230pt"
    >
      1. Serviço Realizado em Espaço Confinado.
      <span style="mso-spacerun:yes">
                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      </span>
      <br />
      2. Elaborado conforme : I-MA-3010.92-5241-424-HAM-062_F
      -OPERATION AND MAINTENANCE MANUALINERT GAS GENERATOR
      SYSTEM.
      <span style="mso-spacerun:yes">
                                                                                                                                                                                                                                         
      </span>
      <br />
      3. Nas permissões de trabalho - PT, incluir a
      caracteristica no APLAT de &quot; Ambientes Protegidos
      por CO2&quot;.
    </td>

      </tr>*/}
        </tbody>{" "}
      </table>
    </div>
  );
};

export default PlantecPlanilha;
