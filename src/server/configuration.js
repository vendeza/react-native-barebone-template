import * as GlobalContext from "../../app.json";
import { createToken, resolveBasicApplicationAuth } from "./CredentialResolver";
import { CurrentDayBound } from "./api/helper";

const API_RESOURCES = {
    AUTH_APPLICATION: "/auth/app",
    AUTH_APPLICATION_USER: "/auth/user",
    HOTELIER_HOTELS: "/hotelier/properties",
    HOTELIER_STATISTICS: ({ id, from, by }) =>
        `/hotelier/${id}/dashboard/statistics?from=${from}&by=${by}`,
    HOTELIER_ON_LOAD_STATISTICS: ({ id, from, by }) =>
        `/hotelier/${id}/dashboard/room-type-availability?from=${from}&by=${by}`,
    HOTELIER_RESERVATIONS: (id) => `/hotelier/${id}/dashboard/reservations`,

    HOTEL_STATISTICS_PER_HOTEL: ({ id, from, by, sort = "checkin" }) =>
        `hotelier/${id}/dashboard/reservation-overview/confirmed?from=${from}&by=${by}&sort=${sort}`,
    USER_LOGOUT: "/auth/user/logout",

    //по умолчанию type_updated_at
    HOTELIER_BOOKINGS_CONFIRMED_AND_CANCELED: ({ id }) => {
        let [from, by] = CurrentDayBound();
        const urn = `/hotelier/${id}/bookings?start_date=${from}&end_date=${by}&date_range_type="type_updated_at"`;
        console.log("HOTEL BOOKINGS URN [CONFIRMED AND CANCELED]", urn);
        return urn;
    },

};

const ApplicationToken = ((context) => () => {
    return createToken(resolveBasicApplicationAuth(context));
})(GlobalContext.server);

const getUrl = (path) => {
    return GlobalContext.server.url + path;
};

const post = (obj) => ({ ...obj, method: "POST" });

export { ApplicationToken, GlobalContext, API_RESOURCES, getUrl, post };
