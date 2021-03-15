import { encode } from "js-base64";
import { Platform } from "react-native";

function hasAuth(context) {
    const { auth } = context;
    return auth && auth.type === "Basic";
}

function hasPlatform(context) {
    if (Platform.OS === "ios") {
        return context.auth.ios;
    } else {
        return context.auth.android;
    }
}

function getCredentialsByPlatform(context) {
    const p =
        Platform.OS === "ios"
            ? context.auth.ios.credentials
            : context.auth.android.credentials;
    console.log("cred", p);
    return p;
}

function hasBasicCredentials(context) {
    if (hasAuth(context) && hasPlatform(context)) {
        const credentials = getCredentialsByPlatform(context);
        return credentials && credentials.username && credentials.password;
    }
}

export function resolveBasicApplicationAuth(context) {
    // console.log(JSON.stringify(context, null, 2));
    if (hasBasicCredentials(context)) {
        return getCredentialsByPlatform(context);
    } else {
        throw Error("");
    }
}

export function createToken(credentials) {
    //console.log(JSON.stringify(credentials, null, 2));

    return encode(`${credentials.username}:${credentials.password}`);
}
