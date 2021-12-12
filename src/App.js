import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
// import Youtube from 'react-youtube'
// var getYoutubeID = requires ('get-youtube-id')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/668nUCeBHyY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <input type ='text' required placeholder = "URL..."/> */}
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Exemple@gamil.com"
                  ></Form.Control>
                  <Form.Text className="text-muted">
                    we'll never share your Email trust us
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group style={{ marginBottom: 15 }} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Button type="submit">login</Button>
            </Row>
          </Form>
          <Card className="nb-3" style={{ color: "#000", marginTop: 15 }}>
            <Card.Img src="https://picsum.photos/200/50" />
            <Card.Body>
              <Card.Title>first react by bootstrap</Card.Title>
              <Card.Text>this is text</Card.Text>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>test1</Breadcrumb.Item>
            <Breadcrumb.Item>test2</Breadcrumb.Item>
            <Breadcrumb.Item>test3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="primary"> this is a button </Alert>
          <Button> test button </Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
