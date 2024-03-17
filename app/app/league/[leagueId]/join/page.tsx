export default function Home({ params }: { params: { leagueId: string } }) {
  return (
    <p>
      This page will allow you to join the league {params.leagueId}.
    </p>
  );
}
