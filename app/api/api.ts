import { AuthApi, Configuration, LeagueApi, MatchApi, PredictionApi, TeamApi, UserApi } from "@/client";

export default class Client {

    readonly authApi: AuthApi
    readonly leagueApi: LeagueApi
    readonly matchApi: MatchApi
    readonly predictionApi: PredictionApi
    readonly teamApi: TeamApi
    readonly userApi: UserApi

    private constructor(
        authApi: AuthApi,
        leagueApi: LeagueApi,
        matchApi: MatchApi,
        predictionApi: PredictionApi,
        teamApi: TeamApi,
        userApi: UserApi
    ) {
        this.authApi = authApi
        this.leagueApi = leagueApi
        this.matchApi = matchApi
        this.predictionApi = predictionApi
        this.teamApi = teamApi
        this.userApi = userApi
    }

    public static create(config: Configuration) {
        return new Client(
            new AuthApi(config),
            new LeagueApi(config),
            new MatchApi(config),
            new PredictionApi(config),
            new TeamApi(config),
            new UserApi(config)
        );
    }



}