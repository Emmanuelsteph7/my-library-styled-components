export const flexTab = (props) => {
  let style = "";

  // styles for flex-direction: row => Tablet
  style += props.rowTab
    ? `
        @media screen and (max-width: 1024px) {
            display: flex;
            flex-direction: row;
        }
    `
    : "";

  // styles for row justify content => Tablet
  style += props.rowTabJB
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
          }
      `
    : "";

  style += props.rowTabJE
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
          }
      `
    : "";

  style += props.rowTabJA
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
          }
      `
    : "";

  style += props.rowTabJEnd
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
          }
      `
    : "";

  style += props.rowTabJStart
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
          }
      `
    : "";

  // styles for row align items => Tablet
  style += props.rowTabAC
    ? `
          @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
          }
`
    : "";

  style += props.rowTabAStr
    ? `
          @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
          }
`
    : "";

  style += props.rowTabAB
    ? `
          @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-item: baseline;
          }
`
    : "";

  style += props.rowTabAEnd
    ? `
          @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
          }
`
    : "";

  style += props.rowTabAStart
    ? `
          @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
          }
`
    : "";

  // styles for flex-direction: column => Tablet
  style += props.columnTab
    ? `
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
  }
`
    : "";

  // styles for column justify content => Tablet
  style += props.columnTabJB
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
          }
      `
    : "";

  style += props.columnTabJE
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
          }
      `
    : "";

  style += props.columnTabJA
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
          }
      `
    : "";

  style += props.columnTabJEnd
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
          }
      `
    : "";

  style += props.columnTabJStart
    ? `
          @media screen and (max-width: 1024px) {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
          }
      `
    : "";

  // styles for column align items => Tablet
  style += props.columnTabAC
    ? `
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
    : "";

  style += props.columnTabAStr
    ? `
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`
    : "";

  style += props.columnTabAB
    ? `
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-item: baseline;
  }
`
    : "";

  style += props.columnTabAEnd
    ? `
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`
    : "";

  style += props.columnTabAStart
    ? `
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
    : "";

  // styles for row justify content and align items

  // styles for row justify content center and all align items
  style += props.rowTabJCAC
    ? `
    @media screen and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    }
`
    : "";

  style += props.rowTabJCAEnd
    ? `
    @media screen and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
    }
`
    : "";

  style += props.rowTabJCAB
    ? `
    @media screen and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
    }
`
    : "";

  style += props.rowTabJCAStart
    ? `
    @media screen and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
    }
`
    : "";

  style += props.rowTabJCAStr
    ? `
    @media screen and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
    }
`
    : "";

  // styles for justify content flex-start and all align items
  style += props.rowTabJStartAC
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
    }
`
    : "";

  style += props.rowTabJStartAEnd
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
    }
`
    : "";

  style += props.rowTabJStartAB
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: flex-start;
    }
`
    : "";

  style += props.rowTabJStartAStart
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
    }
`
    : "";

  style += props.rowTabJStartAStr
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: flex-start;
    }
`
    : "";

  // styles for justify content flex-end and all align items
  style += props.rowTabJEndAC
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
    }
`
    : "";

  style += props.rowTabJEndAEnd
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
    }
`
    : "";

  style += props.rowTabJEndAB
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: flex-end;
    }
`
    : "";

  style += props.rowTabJEndAStart
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-end;
    }
`
    : "";

  style += props.rowTabJEndAStr
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: flex-end;
    }
`
    : "";

  // styles for justify content space-between and all align items
  style += props.rowTabJBAC
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
    }
`
    : "";

  style += props.rowTabJBAEnd
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
    }
`
    : "";

  style += props.rowTabJBAB
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-between;
    }
`
    : "";

  style += props.rowTabJBAStart
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
    }
`
    : "";

  style += props.rowTabJBAStr
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-between;
    }
`
    : "";

  // styles for justify content space-evenly and all align items
  style += props.rowTabJEAC
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
    }
`
    : "";

  style += props.rowTabJEAEnd
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-evenly;
    }
`
    : "";

  style += props.rowTabJEAB
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-evenly;
    }
`
    : "";

  style += props.rowTabJEAStart
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
    }
`
    : "";

  style += props.rowTabJEAStr
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-evenly;
    }
`
    : "";

  // styles for justify content space-around and all align items
  style += props.rowTabJAAC
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
    }
`
    : "";

  style += props.rowTabJAAEnd
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-around;
    }
`
    : "";

  style += props.rowTabJAAB
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-around;
    }
`
    : "";

  style += props.rowTabJAAStart
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
    }
`
    : "";

  style += props.rowTabJAAStr
    ? `
    @media screen and (max-width: 1024px) {
display: flex;
flex-direction: row;
align-items: stretch;
justify-content: space-around;
    }
`
    : "";

  // styles for column justify content and align items

  // styles for column justify content center and all align items
  style += props.columnTabJCAC
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  }
`
    : "";

  style += props.columnTabJCAEnd
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
  }
`
    : "";

  style += props.columnTabJCAB
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: center;
  }
`
    : "";

  style += props.columnTabJCAStart
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
  }
`
    : "";

  style += props.columnTabJCAStr
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: center;
  }
`
    : "";

  // styles for justify content flex-start and all align items
  style += props.columnTabJStartAC
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
  }
`
    : "";

  style += props.columnTabJStartAEnd
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-start;
  }
`
    : "";

  style += props.columnTabJStartAB
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: flex-start;
  }
`
    : "";

  style += props.columnTabJStartAStart
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
  }
`
    : "";

  style += props.columnTabJStartAStr
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-start;
  }
`
    : "";

  // styles for justify content flex-end and all align items
  style += props.columnTabJEndAC
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
  }
`
    : "";

  style += props.columnTabJEndAEnd
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
  }
`
    : "";

  style += props.columnTabJEndAB
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: flex-end;
  }
`
    : "";

  style += props.columnTabJEndAStart
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
  }
`
    : "";

  style += props.columnTabJEndAStr
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-end;
  }
`
    : "";

  // styles for justify content space-between and all align items
  style += props.columnTabJBAC
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
  }
`
    : "";

  style += props.columnTabJBAEnd
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
  }
`
    : "";

  style += props.columnTabJBAB
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: space-between;
  }
`
    : "";

  style += props.columnTabJBAStart
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
  }
`
    : "";

  style += props.columnTabJBAStr
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
  }
`
    : "";

  // styles for justify content space-evenly and all align items
  style += props.columnTabJEAC
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
  }
`
    : "";

  style += props.columnTabJEAEnd
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-evenly;
  }
`
    : "";

  style += props.columnTabJEAB
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: space-evenly;
  }
`
    : "";

  style += props.columnTabJEAStart
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
  }
`
    : "";

  style += props.columnTabJEAStr
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-evenly;
  }
`
    : "";

  // styles for justify content space-around and all align items
  style += props.columnTabJAAC
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
  }
`
    : "";

  style += props.columnTabJAAEnd
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
  }
`
    : "";

  style += props.columnTabJAAB
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: baseline;
justify-content: space-around;
  }
`
    : "";

  style += props.columnTabJAAStart
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
  }
`
    : "";

  style += props.columnTabJAAStr
    ? `
  @media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-around;
  }
`
    : "";

  return style;
};
