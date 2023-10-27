import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import gamaforceLogo from "./img/gamaforce.png";
import waLogo from "./img/wa.png";
import linkedinLogo from "./img/linkedin.jpg";
import githubLogo from "./img/github.png";
import backImage from "./img/random.jpg";

const markerIcon = new L.icon({
  iconUrl: require("./img/marks.png"),
  iconSize: [35, 45],
});

const MapGPS = ({ coorX, coorY }) => {
  return (
    <>
      <MapContainer center={[coorX, coorY]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coorX, coorY]} icon={markerIcon}>
          <Popup>
            {coorX}, {coorY}
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

function App() {
  const [gpsX, setGpsX] = useState(-7.7952777777778);
  const [gpsY, setGpsY] = useState(110.36722222222);

  return (
    <>
      <div
        id="head"
        className="space-x-2 p-3 font-face-sigb"
        style={{
          backgroundColor: "#05022D",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div
          className="flex flex-row"
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          <img
            src={gamaforceLogo}
            alt="GAMAFORCE"
            style={{
              width: 75,
              height: 75,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <div
            className="p-4"
            style={{
              justifyContent: "space-evenly",
              gap: 100,
              alignItems: "center",
              fontSize: 30,
              color: "#EEE2DC",
            }}
          >
            GAMAFORCE
          </div>
        </div>
        <div
          className="flex p-4"
          style={{
            color: "#EEE2DC",
            fontSize: 30,
            alignItems: "center",
          }}
        >
          Jagat Saksana Dirga
        </div>
      </div>
      <div id="body" className="bg-creamy flex flex-col flex-wrap">
        <div
          className="flex items-center justify-center flex-col font-face-sigb"
          style={{
            color: "white",
            height: 300,
            backgroundImage: `url(${backImage})`,
          }}
        >
          <div
            style={{
              fontSize: 60,
            }}
          >
            Polikarpus Arya Pradhanika
          </div>
          <div
            style={{
              fontSize: 25,
            }}
          >
            Teknologi Informasi 23
          </div>
        </div>

        <div>
          <br></br>
          <br></br>
        </div>

        <div
          className="flex flex-row font-face-sigb"
          style={{
            justifyContent: "space-evenly",
            fontSize: 35,
          }}
        >
          <div>
            <h1 style={{ color: "#123C69" }}>Skill?</h1>
            <ul
              style={{
                fontSize: 25,
              }}
            >
              <li>React.js</li>
              <li>Competitive Programming</li>
              <li>Fast learner</li>
            </ul>
          </div>
          <div>
            <h1 style={{ color: "#123C69" }}>License and Certification?</h1>
            <ul
              style={{
                fontSize: 25,
              }}
            >
              <li>
                Bronze medalist Indonesia National Science Olympiad in
                Informatics 2021
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ height: 20, backgroundColor: "#EEE2DC" }}>
        <br></br>
      </div>

      <div
        className="flex items-center justify-center flex-col font-face-sigb"
        style={{ height: 300, backgroundColor: "#EEE2DC" }}
      >
        <div
          style={{
            fontSize: 35,
            color: "#123C69",
          }}
        >
          Saya tinggal di?
        </div>
        <div
          className="border-4"
          style={{
            borderStyle: "solid",
            borderColor: "black",
          }}
        >
          <MapGPS coorX={-7.7130555555556} coorY={110.35638888889} />
        </div>
      </div>

      <div
        className="flex items-center justify-center flex-col font-face-sigb"
        style={{ height: 300, backgroundColor: "#EEE2DC" }}
      >
        <div
          className="flex flex-col items-center justify-center"
          style={{
            fontSize: 35,
          }}
        >
          <div style={{ color: "#123C69" }}>Contact</div>
          <div
            style={{
              fontSize: 25,
            }}
          >
            <div className="flex flex-row items-center">
              <img
                src={waLogo}
                alt={"linkedin"}
                style={{
                  height: 30,
                  width: 30,
                }}
              ></img>
              &nbsp;Whatsapp: &nbsp;
              <a
                style={{ color: "#AC3B69" }}
                href={"https://wa.me/+6281393127055"}
              >
                081393127055
              </a>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={linkedinLogo}
                alt={"linkedin"}
                style={{
                  height: 30,
                  width: 30,
                }}
              ></img>
              &nbsp;Linkedin: &nbsp;
              <a
                style={{ color: "#AC3B69" }}
                href={
                  "https://www.linkedin.com/in/polikarpus-arya-pradhanika-2133b5256/"
                }
              >
                polikarpus-arya
              </a>
            </div>
            <div className="flex flex-row items-center">
              <img
                src={githubLogo}
                alt={"github"}
                style={{
                  height: 30,
                  width: 30,
                }}
              ></img>
              &nbsp; Github: &nbsp;
              <a
                style={{ color: "#AC3B69" }}
                href={"https://github.com/mie-intel/"}
              >
                mie-intel
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="head"
        className="bg-darkcreamy space-x-4 p-6 font-face-sigb"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          bottom: 0,
          width: "100%",
          fontSize: 25,
          color: "black",
        }}
      >
        Made with ❤️ by Polikarpus Arya
      </div>
    </>
  );
}

export default App;
