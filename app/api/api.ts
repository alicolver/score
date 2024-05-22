import {AuthApi, Configuration, LeagueApi, MatchApi, PredictionApi, TeamApi, UserApi} from "@/client";
import {API_GATEWAY} from "./constants";

export class AuthClient {
    readonly authApi: AuthApi
    readonly userApi: UserApi

    private constructor(
        authApi: AuthApi,
        userApi: UserApi
    ) {
        this.authApi = authApi
        this.userApi = userApi
    }

    public static create(config: Configuration): AuthClient {
        return new AuthClient(
            new AuthApi(config),
            new UserApi(config)
        )
    }
}

const authClientConfig = new Configuration({
    basePath: API_GATEWAY + '/prod',
})
export const AUTH_CLIENT = AuthClient.create(authClientConfig)

export default class Client {

    readonly leagueApi: LeagueApi
    readonly matchApi: MatchApi
    readonly predictionApi: PredictionApi
    readonly teamApi: TeamApi
    readonly userApi: UserApi

    private constructor(
        leagueApi: LeagueApi,
        matchApi: MatchApi,
        predictionApi: PredictionApi,
        teamApi: TeamApi,
        userApi: UserApi
    ) {
        this.leagueApi = leagueApi
        this.matchApi = matchApi
        this.predictionApi = predictionApi
        this.teamApi = teamApi
        this.userApi = userApi
    }

    public static create(config: Configuration) {
        return new Client(
            new LeagueApi(config),
            new MatchApi(config),
            new PredictionApi(config),
            new TeamApi(config),
            new UserApi(config)
        );
    }
}
