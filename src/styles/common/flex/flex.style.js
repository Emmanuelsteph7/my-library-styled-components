export const flex = (props) => {
  let style = "";

  // styles for flex-direction: row.
  style += props.row
    ? `
      display: flex;
      flex-direction: row;
  `
    : "";

  // styles for row justify content
  style += props.rowJB
    ? `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  `
    : "";

  style += props.rowJE
    ? `
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
  `
    : "";

  style += props.rowJA
    ? `
      display: flex;
      flex-direction: row;
      justify-content: space-around;
  `
    : "";

  style += props.rowJC
    ? `
      display: flex;
      flex-direction: row;
      justify-content: center;
  `
    : "";

  style += props.rowJEnd
    ? `
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
  `
    : "";

  style += props.rowJStart
    ? `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  `
    : "";

  // styles for row align items
  style += props.rowAC
    ? `
      display: flex;
      flex-direction: row;
      align-items: center;
  `
    : "";

  style += props.rowAStr
    ? `
      display: flex;
      flex-direction: row;
      align-items: stretch;
  `
    : "";

  style += props.rowAB
    ? `
      display: flex;
      flex-direction: row;
      align-item: baseline;
  `
    : "";

  style += props.rowAEnd
    ? `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
  `
    : "";

  style += props.rowAStart
    ? `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
  `
    : "";

  // styles for flex-direction: column.
  style += props.column
    ? `
      display: flex;
      flex-direction: column;
  `
    : "";

  // styles for column justify content
  style += props.columnJB
    ? `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  `
    : "";

  style += props.columnJE
    ? `
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
  `
    : "";

  style += props.columnJA
    ? `
      display: flex;
      flex-direction: column;
      justify-content: space-around;
  `
    : "";

  style += props.columnJEnd
    ? `
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
  `
    : "";

  style += props.columnJStart
    ? `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  `
    : "";

  // styles for column align items
  style += props.columnAC
    ? `
      display: flex;
      flex-direction: column;
      align-items: center;
  `
    : "";

  style += props.columnAStr
    ? `
      display: flex;
      flex-direction: column;
      align-items: stretch;
  `
    : "";

  style += props.columnAB
    ? `
      display: flex;
      flex-direction: column;
      align-item: baseline;
  `
    : "";

  style += props.columnAEnd
    ? `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
  `
    : "";

  style += props.columnAStart
    ? `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  `
    : "";

  // styles for row justify content and align items

  // styles for row justify content center and all align items
  style += props.rowJCAC
    ? `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
    : "";

  style += props.rowJCAEnd
    ? `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`
    : "";

  style += props.rowJCAB
    ? `
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
`
    : "";

  style += props.rowJCAStart
    ? `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`
    : "";

  style += props.rowJCAStr
    ? `
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
`
    : "";

  // styles for justify content flex-start and all align items
  style += props.rowJStartAC
    ? `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
    : "";

  style += props.rowJStartAEnd
    ? `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`
    : "";

  style += props.rowJStartAB
    ? `
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`
    : "";

  style += props.rowJStartAStart
    ? `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
    : "";

  style += props.rowJStartAStr
    ? `
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
`
    : "";

  // styles for justify content flex-end and all align items
  style += props.rowJEndAC
    ? `
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
`
    : "";

  style += props.rowJEndAEnd
    ? `
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
`
    : "";

  style += props.rowJEndAB
    ? `
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: flex-end;
`
    : "";

  style += props.rowJEndAStart
    ? `
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-end;
`
    : "";

  style += props.rowJEndAStr
    ? `
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: flex-end;
`
    : "";

  // styles for justify content space-between and all align items
  style += props.rowJBAC
    ? `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
    : "";

  style += props.rowJBAEnd
    ? `
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
`
    : "";

  style += props.rowJBAB
    ? `
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-between;
`
    : "";

  style += props.rowJBAStart
    ? `
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
`
    : "";

  style += props.rowJBAStr
    ? `
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-between;
`
    : "";

  // styles for justify content space-evenly and all align items
  style += props.rowJEAC
    ? `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
    : "";

  style += props.rowJEAEnd
    ? `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
`
    : "";

  style += props.rowJEAB
    ? `
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
`
    : "";

  style += props.rowJEAStart
    ? `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`
    : "";

  style += props.rowJEAStr
    ? `
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
`
    : "";

  // styles for row justify content space-around and all align items
  style += props.rowJAAC
    ? `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
    : "";

  style += props.rowJAAEnd
    ? `
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-around;
`
    : "";

  style += props.rowJAAB
    ? `
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-around;
`
    : "";

  style += props.rowJAAStart
    ? `
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
`
    : "";

  style += props.rowJAAStr
    ? `
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-around;
`
    : "";

  // styles for column justify content and  align items

  // styles for column justify content center and all align items
  style += props.columnJCAC
    ? `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
    : "";

  style += props.columnJCAEnd
    ? `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`
    : "";

  style += props.columnJCAB
    ? `
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`
    : "";

  style += props.columnJCAStart
    ? `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
    : "";

  style += props.columnJCAStr
    ? `
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`
    : "";

  // styles for justify content flex-start and all align items
  style += props.columnJStartAC
    ? `
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`
    : "";

  style += props.columnJStartAEnd
    ? `
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-start;
`
    : "";

  style += props.columnJStartAB
    ? `
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: flex-start;
`
    : "";

  style += props.columnJStartAStart
    ? `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`
    : "";

  style += props.columnJStartAStr
    ? `
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-start;
`
    : "";

  // styles for justify content flex-end and all align items
  style += props.columnJEndAC
    ? `
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`
    : "";

  style += props.columnJEndAEnd
    ? `
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
`
    : "";

  style += props.columnJEndAB
    ? `
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: flex-end;
`
    : "";

  style += props.columnJEndAStart
    ? `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
`
    : "";

  style += props.columnJEndAStr
    ? `
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-end;
`
    : "";

  // styles for justify content space-between and all align items
  style += props.columnJBAC
    ? `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
    : "";

  style += props.columnJBAEnd
    ? `
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
`
    : "";

  style += props.columnJBAB
    ? `
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: space-between;
`
    : "";

  style += props.columnJBAStart
    ? `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`
    : "";

  style += props.columnJBAStr
    ? `
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
`
    : "";

  // styles for justify content space-evenly and all align items
  style += props.columnJEAC
    ? `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
    : "";

  style += props.columnJEAEnd
    ? `
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-evenly;
`
    : "";

  style += props.columnJEAB
    ? `
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: space-evenly;
`
    : "";

  style += props.columnJEAStart
    ? `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
`
    : "";

  style += props.columnJEAStr
    ? `
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-evenly;
`
    : "";

  // styles for justify content space-around and all align items
  style += props.columnJAAC
    ? `
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
    : "";

  style += props.columnJAAEnd
    ? `
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
`
    : "";

  style += props.columnJAAB
    ? `
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: space-around;
`
    : "";

  style += props.columnJAAStart
    ? `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
`
    : "";

  style += props.columnJAAStr
    ? `
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-around;
`
    : "";

  return style;
};
