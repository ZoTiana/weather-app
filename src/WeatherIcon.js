import React from "react";

export default function WeatherIcon(props) {
  return (
    <div>
      <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`}
        alt={props.alt}
      />
    </div>
  );
}
