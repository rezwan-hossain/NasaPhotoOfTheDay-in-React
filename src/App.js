import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nasaData: ""
    };
  }

  componentDidMount() {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=";
    const API_KEY = "jpYPmQeMgQk1OXm0bDvdUHCmbYcxcOz9vCBw4vZo";

    axios
      .get(API_URL + API_KEY)
      .then(response => {
        this.setState({
          nasaData: response.data
        });
        console.log(response.data.hdurl);
      })
      .catch(error => {
        console.log(error, "check your code");
      });
  }

  renderMassage() {
    const title = this.state.nasaData.title,
      date = this.state.nasaData.date,
      explanation = this.state.nasaData.explanation,
      media_type = this.state.nasaData.media_type,
      url = this.state.nasaData.url,
      hdurl = this.state.nasaData.hdurl,
      copyright = this.state.nasaData.copyright;

    if (media_type === "image") {
      return (
        <div>
          <h1>
            {title}
          </h1>
          <a href={hdurl}>
            <img src={url} alt={title} />
          </a>
          <p>
            {explanation}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            {title}
          </h1>
          <iframe
            allowFullScreen
            frameBorder="0"
            height="520"
            width="720"
            src={url}
          />
          <p>
            {explanation}
          </p>
        </div>
      );
    }
  }

  render() {
    let message;

    return (
      <div className="App">
        {this.renderMassage()}
      </div>
    );
  }
}

export default App;
