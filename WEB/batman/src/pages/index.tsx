import Settings from "../component/settings";
import Statistics from "../component/statistics";
import Layout from "../container/common/Layout";
import Home from "./home";

export const home = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const statistics = () => {
  return (
    <Layout>
      <Statistics />
    </Layout>
  );
};

export const settings = () => {
  return (
    <Layout>
      <Settings />
    </Layout>
  );
};
