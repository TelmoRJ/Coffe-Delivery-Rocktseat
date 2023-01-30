import { BallContainer, BallContent } from "./styles";
import React, { ReactNode } from "react";

interface BallProps {
  iconBG: string;
  icon: React.ReactNode;
  children: ReactNode;
}

export function Ball({ icon, iconBG, children }: BallProps) {
  return (
    <BallContainer>
      <BallContent bg={iconBG}>{icon}</BallContent>
      {children}
    </BallContainer>
  );
}
