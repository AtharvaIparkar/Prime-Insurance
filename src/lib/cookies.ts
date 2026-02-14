import Cookies from 'js-cookie';

export const cookieUtils = {
    set: (name: string, value: string, days: number = 365) => {
        Cookies.set(name, value, { expires: days, sameSite: 'strict' });
    },

    get: (name: string) => {
        return Cookies.get(name);
    },

    remove: (name: string) => {
        Cookies.remove(name);
    },

    exists: (name: string) => {
        return Cookies.get(name) !== undefined;
    },
};
