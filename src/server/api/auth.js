import {
    ApplicationToken,
    GlobalContext,
    API_RESOURCES,
} from "../configuration";

const token = ApplicationToken();

const headers = {
    Accept: "application/json",
    "Content-Language": GlobalContext.server.lang,
};

const AUTH_APPLICATION = "/auth/app";
const AUTH_APPLICATION_USER = "/auth/user";

const resolve = (s) => `${GlobalContext.server.url}${s}`;

/**
 * Data Object -> FormData
 * @param s key:value object
 * @return {FormData}
 */
const form = (s) =>
    Object.entries(s).reduce((f, [key, value]) => {
        f.append(key, value);
        return f;
    }, new FormData());

const authenticateApplication = () => {
    const path = resolve(AUTH_APPLICATION);
    return fetch(path, {
        method: "POST",
        headers: {
            Authorization: `Basic ${token}`,
            ...headers,
        },
    });
};

const authenticateUser = async (data) => {
    return fetch(resolve(AUTH_APPLICATION_USER), {
        method: "POST",
        headers: {
            Authorization: `Bearer ${data.token}`,
        },
        body: form({
            username: data.username,
            password: data.password,
            role: data.role,
        }),
    });
};

const logoutUser = async ({ token }) => {
    return fetch(resolve(API_RESOURCES.USER_LOGOUT), {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const restorePassword = async ({ token, email, role = "hotelier" }) => {
    return fetch(resolve(API_RESOURCES.RESTORE_PASSWORD_BY_EMAIL), {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: form({
            email: email,
            role: role,
        }),
    });
};

export {
    authenticateApplication,
    authenticateUser,
    logoutUser,
    restorePassword,
};
