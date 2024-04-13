"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.Toolbar = exports.registerToolbarComponent = void 0);
const react_1 = __importDefault(require("react")),
  mobx_react_lite_1 = require("mobx-react-lite"),
  core_1 = require("@blueprintjs/core"),
  styled_1 = __importDefault(require("../utils/styled")),
  screen_1 = require("../utils/screen"),
  history_buttons_1 = require("./history-buttons"),
  text_toolbar_1 = require("./text-toolbar"),
  html_toolbar_1 = require("./html-toolbar"),
  image_toolbar_1 = require("./image-toolbar"),
  svg_toolbar_1 = require("./svg-toolbar"),
  line_toolbar_1 = require("./line-toolbar"),
  video_toolbar_1 = require("./video-toolbar"),
  figure_toolbar_1 = require("./figure-toolbar"),
  many_toolbar_1 = require("./many-toolbar"),
  page_toolbar_1 = require("./page-toolbar"),
  download_button_1 = require("./download-button"),
  duplicate_button_1 = require("./duplicate-button"),
  remove_button_1 = require("./remove-button"),
  lock_button_1 = require("./lock-button"),
  position_picker_1 = require("./position-picker"),
  opacity_picker_1 = require("./opacity-picker"),
  admin_button_1 = require("./admin-button"),
  group_button_1 = require("./group-button"),
  flags_1 = require("../utils/flags"),
  ComponentsTypes = {
    text: text_toolbar_1.TextToolbar,
    image: image_toolbar_1.ImageToolbar,
    svg: svg_toolbar_1.SvgToolbar,
    many: many_toolbar_1.ManyToolbar,
    line: line_toolbar_1.LineToolbar,
    video: video_toolbar_1.VideoToolbar,
    figure: figure_toolbar_1.FigureToolbar,
    page: page_toolbar_1.PageToolbar,
  };
function registerToolbarComponent(e, t) {
  ComponentsTypes[e] = t;
}
exports.registerToolbarComponent = registerToolbarComponent;
const NavbarContainer = (0, styled_1.default)("div")`
  white-space: nowrap;

  ${(0, screen_1.mobileStyle)(
    "\n    max-width: 100vw;\n    overflow-x: auto;\n    overflow-y: hidden;\n  "
  )}
`,
  NavInner = (0, styled_1.default)("div")`
  width: 100%;
  height: 100%;
  ${(0, screen_1.mobileStyle)("\n    display: flex;\n  ")}
`;
(exports.Toolbar = (0, mobx_react_lite_1.observer)(
  ({ store: e, downloadButtonEnabled: t, components: o = {} }) => {
    const r = 1 === new Set(e.selectedElements.map((e) => e.type)).size,
      l = 1 === e.selectedElements.length,
      a = e.selectedElements[0],
      n = e.selectedElements.every((e) => e.styleEditable);
    let i = n && l && ComponentsTypes[a.type];
    r && "text" === (null == a ? void 0 : a.type)
      ? (i = ComponentsTypes[a.type])
      : e.selectedElements.length > 1 && (i = ComponentsTypes.many),
      0 === e.selectedElements.length && (i = ComponentsTypes.page),
      l &&
        "text" === a.type &&
        flags_1.flags.htmlRenderEnabled &&
        (i = html_toolbar_1.HtmlToolbar);
    const _ = l && a._cropModeEnabled,
      u =
        (null == o ? void 0 : o.ActionControls) ||
        (t ? download_button_1.DownloadButton : null),
      s = (null == o ? void 0 : o.Position) || position_picker_1.PositionPicker,
      c = (null == o ? void 0 : o.Opacity) || opacity_picker_1.OpacityPicker,
      b = (null == o ? void 0 : o.Lock) || lock_button_1.LockButton,
      d =
        (null == o ? void 0 : o.Duplicate) ||
        duplicate_button_1.DuplicateButton,
      m = (null == o ? void 0 : o.Remove) || remove_button_1.RemoveButton,
      p = (null == o ? void 0 : o.Group) || group_button_1.GroupButton,
      g = (null == o ? void 0 : o.History) || history_buttons_1.HistoryButtons,
      v = (null == o ? void 0 : o.Admin) || admin_button_1.AdminButton;
    return react_1.default.createElement(
      NavbarContainer,
      { className: "bp5-navbar" },
      react_1.default.createElement(
        NavInner,
        null,
        !_ && react_1.default.createElement(g, { store: e }),
        i && n && react_1.default.createElement(i, { store: e, components: o }),
        !_ &&
          react_1.default.createElement(
            core_1.Navbar.Group,
            { align: core_1.Alignment.RIGHT },
            "admin" === e.role &&
              react_1.default.createElement(v, { store: e }),
            react_1.default.createElement(p, { store: e }),
            react_1.default.createElement(s, { store: e }),
            n && react_1.default.createElement(c, { store: e }),
            react_1.default.createElement(b, { store: e }),
            react_1.default.createElement(d, { store: e }),
            react_1.default.createElement(m, { store: e }),
            u &&
              react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(core_1.Divider, {
                  style: { height: "100%", margin: "0 15px" },
                }),
                react_1.default.createElement(u, { store: e })
              )
          )
      )
    );
  }
)),
  (exports.default = exports.Toolbar);
