package com.zipgap.controller.userController.util;

import javax.servlet.http.Cookie;

public class CookieGetter {
    private Cookie cookie;

    public CookieGetter(String sessionID) {
        cookie = new Cookie("zipgabCookie", sessionID);
        cookie.setDomain("zipgab.info");
        cookie.setComment("zipgab's login cookie");
    }

    public Cookie getCookie() {
        return cookie;
    }
}
