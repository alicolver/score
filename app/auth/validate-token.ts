import {getCookie} from "cookies-next";
import {TOKEN_COOKIE_KEY} from "@/app/api/api";

const COGNITO_URL = "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_mXd24srf5/.well-known/jwks.json"

export default async function validate(): Promise<boolean> {
    console.log("running...")
    try {
        const response = await fetch(
           COGNITO_URL,
            {
                body: JSON.stringify({
                    AccessToken: getCookie(TOKEN_COOKIE_KEY)
                }),
                headers: {
                    "Content-Type": "application/x-amz-json-1.1",
                    "X-Amz-Target": "AWSCognitoIdentityProviderService.GetUser"
                }
            }
        )
        return response.status === 400
    } catch {
        return false
    }
}