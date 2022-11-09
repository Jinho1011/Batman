import styled from "styled-components";

import { Line } from "react-chartjs-2";
import { ILogInWeek } from "../../../hooks/useLog";

const GraphBlockWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: bolder;
`;

const WeekStatistic = ({ data }: { data: ILogInWeek }) => {
  return (
    <GraphBlockWrapper>
      <Wrapper>
        <Line
          data={{
            labels: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
            datasets: [
              {
                label: "주간 통계",
                data: [
                  data.result.SUNDAY.length,
                  data.result.MONDAY.length,
                  data.result.TUESDAY.length,
                  data.result.WEDNESDAY.length,
                  data.result.THURSDAY.length,
                  data.result.FRIDAY.length,
                  data.result.SATURDAY.length,
                ],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgb(75, 192, 192)",
                tension: 0,
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
        />
      </Wrapper>
    </GraphBlockWrapper>
  );
};

export default WeekStatistic;
