import React from "react";
import { CardContainer, CardDescription, CardTitle } from "./styles";

interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <hr style={{ borderColor: "#4e4c4c10" }} />
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};
