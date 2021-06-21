import React from 'react'
import styled from 'styled-components'

const ProfileDesign = styled.div`
    .*{
        margin: 0px;
    }
    .id-card-wrapper{
        height: 100vh;
        width: 100%;
        background-color: #091214;
        display: flex;
    }
    .id-card {
        flex-basis: 100%;
        max-width: 55em;
        border: 1px solid rgb(97, 245, 245);
        margin: auto;
        color: #fff;
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
        display: block;
        box-shadow: 0px 0px 4px 3px #12a0a0;
      }
      .profile-row .desc {
        padding: 1em;
      }
      .profile-row .dp .dp-arc-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 6px solid transparent;
        border-top-color: #0AE0DF;
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
            border: 6px solid transparent;
            border-bottom-color: #0AE0DF;
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
            font-family: 'Orbitron', sans-serif;
            color: #ecfcfb;
            text-shadow: 0px 0px 4px #12a0a0;
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
        <img src="https://via.placeholder.com/420x420"></img>
      </div>
      <div class="desc">
        <h1>Tony Stark</h1>
            <p>Strength: Ironman Suit</p>
            <p>Weakness: None</p>
            <p>Known as: Iron Man</p>
      </div>
    </div>
  </div>
</div>
</ProfileDesign>
    )
}

export default About
