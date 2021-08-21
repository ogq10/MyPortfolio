import React from "react";
import ProjectUI from "./ProjectUI";
import Celeb from "../assets/images/Celeb.JPG";
import MoviePoster from "../assets/images/Movies.JPG";
import WeatherApp from "../assets/images/weather.png";

function ProjectData(props) {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <ProjectUI
              imgsrc={MoviePoster}
              title="Movie Soundtracks"
              description="Spotify Web’s REST API provided POST method to access the data given by promise function. The movie posters laid out on the website each had an image index which was used for sending GET requests to the API to get the song of the movie soundtrack being clicked on. JavaScript functionality like play and pause enabled the URL of the audio to be played "
              sourcecode="https://github.com/ogq10/MoviePoster"
              livelink="https://vigilant-gates-84886a.netlify.app/"
            />
          </div>

          <div className="col-md-4">
            <ProjectUI
              imgsrc={Celeb}
              title="Celebrity Image Recognition"
              description="This project was created to showcase the power of machine learning using Amazon Web Services. AWS Rekognition was used to analyze and verify the identity of the image. AWS Lambda enabled access to the service and allowed image conversion to base64 format written in Python. React.js was used for client side and a RESTful API was designed and tested using AWS Gateway and Postman. At completion, the app was deployed to AWS S3"
              sourcecode="https://github.com/ogq10/CelebrityProject"
              livelink="http://celeb-photo-app.s3-website.us-east-2.amazonaws.com/"
            />
          </div>

          <div className="col-md-4">
            <ProjectUI
              imgsrc={WeatherApp}
              title="Weather Forecast"
              description="OpenWeather provided a free API where weather data such as temperature, forecast, and highs and lows for a given city was displayed via DOM selectors and retrieved through JSON object from JavaScript functionality like fetch"
              sourcecode="https://github.com/ogq10/OpenWeatherAPP"
              livelink="https://app.netlify.com/sites/thirsty-gates-816653/overview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectData;
