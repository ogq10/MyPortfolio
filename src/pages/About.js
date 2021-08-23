import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../assets/images/professional.jpg'
const ProfileDesign = styled.div`
    .*{
        margin: 0px;
    }
    .id-card-wrapper{
        height: 100vh;
        width: 100%;
        display: flex;
    }
    .id-card {
        flex-basis: 100%;
        max-width: 55em;
        border: 1px solid #fffafa;
        margin: auto;
        padding: 1em;
        background-color: #0A2129;
        box-shadow: 0px 0px 3px 1px #12a0a0, inset 0px 0px 3px 1px #12a0a0;
      }
      .profile-row {
        display: flex;
      }
      .profile-row .dp {
        flex-basis: 33.3%;
        position: relative;
        margin: 24px;
        align-self: center;
      }
      .profile-row .desc {
        flex-basis: 66.6%;
      }
      .profile-row .dp img {
        max-width: 100%;
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
        box-shadow: 0px 0px 4px 3px #fffafa;
      }
      .profile-row .desc {
        padding: 1em;
      }
      .profile-row .dp .dp-arc-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 4px solid transparent;
        border-top-color: #fffafa;
        border-radius: 50%;
        top: -6px;
        left: -6px;

        animation-duration: 2s;
        animation-name: rotate-clock;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes rotate-clock {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        }
        .profile-row .dp .dp-arc-outer {
            position: absolute;
            width: calc(100% + 25px);
            height: calc(100% + 20px);
            border: 4px solid transparent;
            border-bottom-color: #fffafa;
            border-radius: 50%;
            top: -16px;
            left: -16px;
          
            animation-duration: 2s;
            animation-name: rotate-anticlock;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          @keyframes rotate-anticlock {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }
          
          .profile-row .desc {
            font-family: 'Montserrat', sans-serif;
            color: #ecfcfb;
            text-shadow: 0px 0px 4px #292E49;
            letter-spacing: 1px;
          }
          .profile-row .desc h1 {
            margin: 0px;
          }
        }
    }
}

`


function About() {
    return (
        <ProfileDesign>
        <div className="id-card-wrapper">
            <div className="id-card">
                <div className="profile-row">
                    <div className="dp">
                        <div className="dp-arc-outer"></div>
                            <div className="dp-arc-inner"></div>
        <img src={ProfileImage}/>
      </div>
      <div class="desc">
        <h1>Omar Qoran</h1>
            <p>
              I'm a Software Developer from Jerusalem who recently graduated from Coding Temple Bootcamp. I currently live in Chicago, IL where I am seeking a job opportunity in a Software Development position. I attended the University of New Orleans where I learned all about Electrical Engineering and Business before transitioning into programming with the help of Coding Temple. I discovered a passion for writing code and now I want to turn that passion into a career. I want to use the languages I know like Python and Javascript along with technologies like React.js, Flask, Postgresql, AWS, etc to bring value to companies that create services that customers love and use everyday.  </p>
      </div>
    </div>
  </div>
</div>
</ProfileDesign>
    )
}

export default About
