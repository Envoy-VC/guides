import { Card, Cards } from "nextra-theme-docs";
import { days } from "../constants/index.js";

const Days = () => {
  return (
    <Cards>
      {days.map((day) => (
        <Card icon={day.icon} title={day.title} href={day.url}></Card>
      ))}
    </Cards>
  );
};

export default Days;
