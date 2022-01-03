import { DOMAIN_NA1, RIOT_API_KEY } from "constants/api";

/*export async function fetchSummonerData(
  summonerName?: string
): Promise<Summoner> {
  const response = await fetch(
    `${DOMAIN_NA1}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${RIOT_API_KEY}`
  );
  return await response.json();
}*/

export const summonerDataURL = (summonerName?: string): string => {
  return `${DOMAIN_NA1}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${RIOT_API_KEY}`;
};
