import { useState } from "react";
import { Container, Button, Accordion, Card } from "react-bootstrap";
import { AccordionEventKey } from "react-bootstrap/esm/AccordionContext";
import Carousel from "../components/Carousel";
import '../assets/styles/Home.css'

const Home = () => {
  const [active, setActive] = useState('0');
  const slides = [
    {
      company: "Company1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias animi repellendus ad natus nam ipsam, aspernatur libero rem quod repellat deleniti ullam.",
      person: "Person, Position1",
      image: "https://placehold.co/375x500/blue/white?text=1"
    },
    {
      company: "Company2",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias animi repellendus ad natus nam ipsam, aspernatur libero rem quod repellat deleniti ullam.",
      person: "Person, Position2",
      image: "https://placehold.co/375x500/blue/white?text=2"
    },
    {
      company: "Company3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias animi repellendus ad natus nam ipsam, aspernatur libero rem quod repellat deleniti ullam.",
      person: "Person, Position3",
      image: "https://placehold.co/375x500/blue/white?text=3"
    }
  ]

  const setActiveKey = (eventkey: AccordionEventKey): void => {
    setActive(typeof eventkey?.toString() === 'string' ? eventkey?.toString() : '0');
  }
  return (
    <Container className="d-flex mw-100 flex-column align-items-center gap-4 p-0 mt-2" fluid>
      <form className="code-form mw-100 d-flex p-2 ps-3 justify-content-between align-items-center gap-3 bg-success">
        <label className="fw-bold text-light">
          Joining as a participant?
        </label>
        <input
          className="d-flex fw-semibold bg-light rounded-pill p-2 bg-success"
          type="text"
          placeholder="Enter code here"
        >
        </input>
        <Button variant="link" className="p-0 position-relative link-icon text-success" size="sm" type="submit">
          <i className="bi bi-arrow-right-circle-fill"></i>
        </Button>
      </form>
      <h1 className="big-title fw-bold text-center">The easiest way to make your meetings interactive</h1>
      <p className="fw-semibold fs-4 mx-3 text-center text-secondary">Engage your audience with real-time polls, quizzes, Q&A, and more</p>
      <Button variant="primary" size="lg" className="text-white fw-semibold underline">Get Started</Button>
      <div className="d-flex w-100 p-5 flex-column background-grey align-items-center gap-4">
        <h2 className="fw-bold text-center fs-1">How it works</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-around m-4 w-100 gap-4">
          <div className="square d-flex flex-column align-items-center gap-2">
            <i className="bi bi-0-square fs-1 text-primary"></i>
            <h3 className="fw-bold text-center">Create an event</h3>
          </div>
          <div className="square d-flex flex-column align-items-center gap-2">
            <i className="bi bi-1-square fs-1 text-primary"></i>
            <h3 className="fw-bold text-center">Create an event</h3>
          </div>
          <div className="square d-flex flex-column align-items-center gap-2">
            <i className="bi bi-2-square fs-1 text-primary"></i>
            <h3 className="fw-bold text-center">Create an event</h3>
          </div>
          <div className="square d-flex flex-column align-items-center gap-2">
            <i className="bi bi-3-square fs-1 text-primary"></i>
            <h3 className="fw-bold text-center">Create an event</h3>
          </div>
          <div className="square d-flex flex-column align-items-center gap-2">
            <i className="bi bi-4-square fs-1 text-primary"></i>
            <h3 className="fw-bold text-center">Create an event</h3>
          </div>
        </div>
      </div>
      <section className="d-flex w-100 flex-column align-items-center gap-4">
        <h2 className="fw-bold text-center p-2 fs-1">
          It's how you include
          <span className="text-primary"> everyone </span>
          in your meetings
        </h2>
        <p className="fw-semibold fs-4 p-2 text-center text-secondary">
          Engage your audience with real-time polls, quizzes, Q&A, and more
        </p>
        <Container fluid className="accordion-holder d-flex p-0 align-items-center justify-content-center gap-5">
            <div className="small flex-column">
              <div className="d-flex p-2">
                <i className="bi bi-bar-chart-fill text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Live Polls</span>
              </div>
              <p className="mx-2 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img
                alt="0"
                className="d-block flex-shrink-1 grow-img"
                src="https://placehold.co/600x300/blue/white?text=0">
              </img>
            </div>
            <img
              alt="0"
              className={active === "0" ? "flex-shrink-1 grow-img not-small" : "flex-shrink-1 grow-img d-none"}
              src="https://placehold.co/600x300/blue/white?text=0">
            </img>
            <div className="small flex-column">
              <div className="d-flex mx-2">
                <i className="bi bi-chat text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Audience Q&A</span>
              </div>
              <p className="mx-2 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img
              alt="1"
              className="d-block flex-shrink-1 grow-img"
              src="https://placehold.co/600x300/blue/white?text=1">
            </img>
            </div>
            <img
              alt="1"
              className={active === "1" ? "d-block flex-shrink-1 grow-img" : "flex-shrink-1 grow-img d-none"}
              src="https://placehold.co/600x300/blue/white?text=1">
            </img>
            <div className="small flex-column">
              <div className="d-flex mx-2">
                <i className="bi bi-trophy text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Quizzes</span>
              </div>
              <p className="mx-2 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img
              alt="0"
              className="d-block flex-shrink-1 grow-img"
              src="https://placehold.co/600x300/blue/white?text=2">
            </img>
            </div>
            <img
              alt="0"
              className={active === "2" ? "d-block flex-shrink-1 grow-img" : "flex-shrink-1 grow-img d-none"}
              src="https://placehold.co/600x300/blue/white?text=2">
            </img>
            <div className="small flex-column">
              <div className="d-flex mx-2">
                <i className="bi bi-arrow-up-right text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Analytics</span>
              </div>
              <p className="mx-2 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img
              alt="0"
              className="d-block flex-shrink-1 grow-img"
              src="https://placehold.co/600x300/blue/white?text=3">
            </img>
            </div>
            <img
              alt="0"
              className={active === "3" ? "d-block flex-shrink-1 grow-img" : "flex-shrink-1 grow-img d-none"}
              src="https://placehold.co/600x300/blue/white?text=3">
            </img>
          <Accordion
            className="flex-grow-0 accordion"
            defaultActiveKey="0"
            onSelect={(eventKey) => setActiveKey(eventKey)}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <i className="bi bi-bar-chart-fill text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Live Polls</span>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="bi bi-chat text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Audience Q&A</span>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <i className="bi bi-trophy fs-2 text-primary"></i>
                <span className="mx-3 fs-3 fw-semibold">Quizzes</span>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <i className="bi bi-arrow-up-right text-primary fs-2"></i>
                <span className="mx-3 fs-3 fw-semibold">Analytics</span>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
      <section className="d-flex w-100 align-items-center gap-4">
        <Card className="p-4 background-grey border-0">
          <i className="bi bi-heart text-primary fs-1"></i>
          <Card.Title className="fs-3 fw-bolder">
            Intuitive and easy
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card>
        <Card className="p-4 background-grey border-0">
          <i className="bi bi-card-checklist text-primary fs-1"></i>
          <Card.Title className="fs-3 fw-bolder">
            5+ polling options
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card>
        <Card className="p-4 background-grey border-0">
          <i className="bi bi-gift text-primary fs-1"></i>
          <Card.Title className="fs-3 fw-bolder">
            Get started for free
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </Card>
      </section>
      <section className="d-flex flex-column w-100 align-items-center gap-4">
        <h2 className="fw-bold text-center fs-1">
          Trusted by the world's best
        </h2>
        <Carousel slides={slides}></Carousel>
      </section>
      <div className="bg-primary p-5 d-flex flex-column align-items-center w-100">
        <h2 className="big-title fw-bold text-center w-75 text-white my-5">
          Make your meetings more interactive with Slido.
        </h2>
        <Button variant="light" size="lg" className="p-3 bg-light text-dark fw-semibold underline">
          Get Started
        </Button>
      </div>
    </Container >
  )
}

export default Home;