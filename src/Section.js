import React from "react";
import { Waypoint } from "react-waypoint";

export const Section = ({ id, title, paragraphs, onChange }) => {
  return (
    <Waypoint
      bottomOffset="50%"
      key={id}
      onPositionChange={({ previousPosition, currentPosition }) => {
        if (
          currentPosition === "inside" &&
          previousPosition !== currentPosition
        ) {
          onChange(id);
        }
      }}
    >
      <section id={id}>
        <h4 className="border-bottom pb-3 mb-3">{title}</h4>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </Waypoint>
  );
};
