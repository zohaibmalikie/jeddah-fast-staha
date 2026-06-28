import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  text?: ReactNode;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
