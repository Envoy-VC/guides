/* eslint-disable react/jsx-key */
import { Card, Cards } from "nextra-theme-docs";

const NavigationCards = ({ elements }) => {
  return (
    <Cards>
      {elements.map((element, index) => (
        <Card
          icon={element.icon}
          title={element.title}
          href={element.url}
          key={index}
        ></Card>
      ))}
    </Cards>
  );
};

export default NavigationCards;
