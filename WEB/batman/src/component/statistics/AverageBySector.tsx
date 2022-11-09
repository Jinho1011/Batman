import React, { useState } from "react";
import { useLogBySector } from "../../hooks/useLog";
import Loading from "../home/Loading";
import Statistic from "./Statistic";
import {
  AvgSectorContainer,
  AvgSectorButtons,
  AvgSectorButton,
} from "./styles";

const AverageBySector = () => {
  const [currentSector, setCurrentSector] = useState(1);
  const logBySectorQuery = useLogBySector(currentSector, 0, 100);

  return (
    <AvgSectorContainer>
      {logBySectorQuery.data ? (
        <Statistic
          label={`섹터 ${currentSector} 시간대별 평균 출현 횟수`}
          labels={[...Array(24).keys()].map((i) => String(i + 1))}
          data={[...Array(24).keys()]
            .map((i) => String(i + 1))
            .map((t) => {
              return logBySectorQuery.data.result.filter(
                (d) => Number(t) === new Date(d.logDate).getHours()
              ).length;
            })}
        />
      ) : (
        <Loading />
      )}
      <AvgSectorButtons>
        {Array.from(Array(6).keys()).map((v) => {
          return (
            <AvgSectorButton onClick={() => setCurrentSector(v + 1)} key={v}>
              {v + 1}
            </AvgSectorButton>
          );
        })}
      </AvgSectorButtons>
    </AvgSectorContainer>
  );
};

export default AverageBySector;
