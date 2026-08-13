import React from "react";
import Header from "./Components/Header";
import Entry from "./Components/Entry";
import "./App.css";
import entryData from "./data.js";

export default function App() {
  console.log(entryData);

  return (
    <div>
      <Header />
      <main className="container">
        {entryData.map((data) => {
          return (
            <Entry
              key={data.id}
              img={{ src: data.img.src, alt: data.img.alt }}
              title={data.title}
              country={data.country}
              googleMapsLink={data.googleMapsLink}
              dates={data.dates}
              text={data.text}
            />
          );
        })}
      </main>
    </div>
  );
}
