package com.zipgap.controller.userController.util;

import javax.servlet.http.Cookie;

public class CookieGetter {
    private Cookie cookie;

    public CookieGetter(String sessionID) {
        cookie = new Cookie("zipgabCookie", sessionID);
        cookie.setComment("zipgab's login cookie");
        cookie.setHttpOnly(true);
    }

    public Cookie getCookie() {
        return cookie;
    }
}
