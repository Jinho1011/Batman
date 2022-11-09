import styled from "styled-components";

import { Line } from "react-chartjs-2";

const GraphBlockWrapper = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Statistic = ({
  label,
  labels,
  data,
}: {
  labels: string[];
  label: string;
  data: number[];
}) => {
  return (
    <GraphBlockWrapper>
      <Line
        data={{
          labels,
          datasets: [
            {
              label,
              data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgb(75, 192, 192)",
              tension: 0,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,

          scales: {
            y: {
              min: 0,
              ticks: {
                // forces step size to be 50 units
                stepSize: 1,
              },
            },
          },
        }}
      />
    </GraphBlockWrapper>
  );
};

export default Statistic;
