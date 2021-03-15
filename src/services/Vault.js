import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * keys
 */
const KEY_REGISTER = {
    APP_TOKEN: "@APP_TOKEN",
    USR_TOKEN: "@USR_TOKEN",
};
/**
 * Save value
 * @param key
 * @param value
 * @return {Promise<unknown>}
 */
const persist = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value, null, 2));
    } catch (error) {
        return Promise.reject(error);
    }
};

/**
 * Get value by key
 * @param key
 * @return {Promise<unknown>}
 */
const find = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value != null) {
            return Promise.resolve(JSON.parse(value));
        }
    } catch (e) {
        return Promise.reject(e);
    }
};

export { persist, find, KEY_REGISTER };
