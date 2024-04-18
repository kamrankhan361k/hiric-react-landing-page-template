import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
  state = {
    socials: [
      { icon: "mdi mdi-facebook", link: "#" },
      { icon: "mdi mdi-twitter", link: "#" },
      { icon: "mdi mdi-linkedin", link: "#" },
      { icon: "mdi mdi-google-plus", link: "#" },
      { icon: "mdi mdi-dribbble", link: "#" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="footer-alt">
          <Container>
            <Row>
              <Col lg="12">
                <div className="float-start pull-none">
                  <p className="copy-rights text-muted mb-3 mb-sm-0">
                    2019 - 2020 © Hiric - Themesbrand
                  </p>
                </div>
                <div className="float-end pull-none ">
                  <ul className="list-inline social m-0">
                    {this.state.socials.map((social, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to={social.link} className="social-icon">
                          <i className={social.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="clearfix"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterLinks;
