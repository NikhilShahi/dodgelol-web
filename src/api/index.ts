import { DOMAIN_NA1 } from "constants/api";

/*export async function fetchSummonerData(
  summonerName?: string
): Promise<Summoner> {
  const response = await fetch(
    `${DOMAIN_NA1}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
  );
  return await response.json();
}*/

export const summonerDataURL = (summonerName?: string): string => {
  return `${DOMAIN_NA1}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`;
};
