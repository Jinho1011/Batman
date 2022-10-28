import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "../container/common/Layout";
import Cam from "../container/home/Cam";
import Runway from "../container/home/Runway";
import LogList from "../container/home/Log";
import User from "../component/home/User";
import SideWrapper from "../component/home/SideWrapper";

const HomePage = () => {
  const { isFull } = useSelector((state) => ({
    isFull: (state as any).fullscreen.isFull,
  }));

  return (
    <Layout>
      {isFull && (
        <>
          <Cam />
        </>
      )}
      {!isFull && (
        <>
          <Cam />
          <Runway />
          <SideWrapper>
            <LogList />
            <User />
          </SideWrapper>
        </>
      )}
    </Layout>
  );
};

// TODO
// 전체화면 동작하게 하기

// Have to Set Fullsize module
// 여기 컴포넌트들을 모두 컨테이너로 바꾸기
export default withRouter(HomePage);
