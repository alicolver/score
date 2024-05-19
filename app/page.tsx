import { Configuration, CreateMatchRequest } from "@/client";
import Client from "./api/api";
import { API_GATEWAY } from "./api/constants";

export default async function Home() {
  
  const apiClientConfig = new Configuration({
    basePath: API_GATEWAY
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        PREDICTABALL.
      </div>
    </main>
  );
}
