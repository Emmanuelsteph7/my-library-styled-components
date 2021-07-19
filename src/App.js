import { Div, Header } from "./styles";

const App = () => {
  return (
    <Header className="header">
      <Div rowJBAC columnTab className="header__container">
        <Div>Logo</Div>
        <Div row rowTabJA>
          <Div>Home</Div>
          <Div>About</Div>
          <Div>Services</Div>
          <Div>Contact Us</Div>
        </Div>
      </Div>
    </Header>
  );
};

export default App;
