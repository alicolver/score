export default function Home({ params }: { params: { leagueId: string } }) {
  return (
    <p>
      This page will show the leaderboard for the league {params.leagueId}.
    </p>
  );
}
