import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { summonerDataURL } from "api";
import { useApi } from "api/useApi";
import { ApiState, Summoner } from "api/types";

const SummonerPage = () => {
  const params = useParams();
  const [summonerData, setSummonerData] = useState<Summoner | undefined>(
    undefined
  );
  const url = summonerDataURL(params.summonerName);
  const { state, error, status, data } = useApi(url);

  useEffect(() => {
    setSummonerData(data);
  }, [data]);
  /*useEffect(() => {
    setLoading(true);
    const getSummonerData = async () => {
      try {
        setSummonerData(await fetchSummonerData(params.summonerName));
        setLoading(false);
      } catch (e) {
        setLoading(false);

      }
    }
    getSummonerData();
  }, [params.summonerName]);*/

  switch (state) {
    case ApiState.ERROR:
      return <h1>ERROR: {error}</h1>;
    case ApiState.SUCCESS:
      if (status === 200) {
        return (
          <h1>
            {summonerData?.name}: Level {summonerData?.summonerLevel}
          </h1>
        );
      } else {
        return <h1>Could not retrieve Summoner Data</h1>;
      }
    default:
      return <h1>Loading...</h1>;
  }
};

export default SummonerPage;
