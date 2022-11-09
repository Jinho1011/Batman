import React, { useState } from "react";
import { IAirstrip } from "../../hooks/useAirstrip";
import { useLogBySector } from "../../hooks/useLog";
import Loading from "../home/Loading";
import Statistic from "./Statistic";
import {
  AvgSectorContainer,
  AvgSectorButtons,
  AvgSectorButton,
} from "./styles";

const AverageBySector = ({ data }: { data: IAirstrip }) => {
  const [currentSector, setCurrentSector] = useState(data.sectorList[0].id);
  const logBySectorQuery = useLogBySector(currentSector, 0, 100);

  return (
    <AvgSectorContainer>
      {logBySectorQuery.data ? (
        <Statistic
          label={`섹터 ${data.sectorList[currentSector].name} 시간대별 평균 출현 횟수`}
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
        {data.sectorList.map((sector) => {
          return (
            <AvgSectorButton
              onClick={() => setCurrentSector(sector.id)}
              key={sector.id}
            >
              {sector.name}
            </AvgSectorButton>
          );
        })}
      </AvgSectorButtons>
    </AvgSectorContainer>
  );
};

export default AverageBySector;
