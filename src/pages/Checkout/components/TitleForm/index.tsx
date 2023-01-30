import { TitleFormContainer } from "./styles";

interface TitleFormProps {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export function TitleForm({ icon, subTitle, title }: TitleFormProps) {
  return (
    <TitleFormContainer>
      {icon}
      <span>
        <sub>{title}</sub>
        <sup>{subTitle}</sup>
      </span>
    </TitleFormContainer>
  );
}
