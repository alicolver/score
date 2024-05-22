import {AuthApi, Configuration, LeagueApi, MatchApi, PredictionApi, TeamApi, UserApi} from "@/client";
import {API_GATEWAY} from "./constants";
import Cookies from "js-cookie";

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

export function getConfigWithAuthHeader(): Configuration {
    const token: string | undefined = Cookies.get("authToken")
    const validatedToken: string = token ? token : ""
    return new Configuration({
        basePath: API_GATEWAY + '/prod',
        headers: {
            "Authorization": validatedToken
        }
    })
}
