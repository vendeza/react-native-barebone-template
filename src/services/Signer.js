import { authenticateUser } from "../server/api/auth";
import { find, persist, KEY_REGISTER } from "./Vault";

const doSignIn = async (data) => {
    try {

        const token = await find(KEY_REGISTER.APP_TOKEN);
        const response = await authenticateUser({ ...data, token });
        const { access_token } = await response.json();
        await persist(KEY_REGISTER.USR_TOKEN, access_token);
        return Promise.resolve(access_token);
    } catch (error) {
        return Promise.reject(error);
    }
};

export { doSignIn };
