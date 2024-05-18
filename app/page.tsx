import { Configuration, CreateMatchRequest } from "@/client";
import Client from "./api/api";

export default async function Home() {
  
  const apiClientConfig = new Configuration({
    basePath: "https://11wg9zigkk.execute-api.eu-west-2.amazonaws.com"
  })
  const client = Client.create(apiClientConfig);

  const matchRequest: CreateMatchRequest = {
    homeTeamId: "0",
    awayTeamId: "1",
    datetime: new Date(),
    venue: "Koln",
    matchDay: -1
  }

  async function wrappedCreate(): Promise<string | undefined>  {
    try {
      const response = await client.matchApi.createMatch({ createMatchRequest: matchRequest })
      return response.matchId
    } catch (error) {
      console.log(error)
      return "call failed"
    }
  }

  return (
    <>
      {wrappedCreate()}
      <p>This page should either redirect you to /app or /login depending on whether you're logged in or not</p>
    </>
  );
}
