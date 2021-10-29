import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";

export default class MasterQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
    };

    this.handleChange = this.handleChange.bind(this);

    this._next = this._next.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

    // check =() => {
    //   if(("#checked").is(":checked")){
    //     alert("Thanks for Attending");
    //     //Code to disable checkbox after checked
    //     ('#checked').attr('disabled', true);
    //   }
    // }

  _next() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 1 ? 3 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  render() {
    return (
      <>
        <div>
          <Card>
            <CardBody>
              <Quiz1
                currentStep={this.state.currentStep}
                step={this.renderMultiStep}
                next={this._next}
                check={this.check}
              />
              <Quiz2
                currentStep={this.state.currentStep}
                step={this.renderMultiStep}
                next={this._next}
                prev={this._prev}
              />
              <Quiz3
                currentStep={this.state.currentStep}
                step={this.renderMultiStep}
                next={this._next}
                prev={this._prev}
              />
              <Quiz4
                currentStep={this.state.currentStep}
                step={this.renderMultiStep}
                next={this._next}
                prev={this._prev}
              />
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}
