import { flex } from "./flex/flex.style";
import { flexTab } from "./flex/flexTab.style";

export const general = (props) => {
  let style = `
    ${flex(props)}
    ${flexTab(props)}
  `;

  return style;
};
