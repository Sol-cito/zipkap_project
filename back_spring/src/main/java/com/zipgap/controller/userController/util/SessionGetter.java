package com.zipgap.controller.userController.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionGetter {
    private HttpSession httpSession;

    public SessionGetter(HttpServletRequest request) {
        httpSession = request.getSession();
    }

    public String getSessionId() {
        return httpSession.getId();
    }

    public void setSessionAttribute(String name, String value) {
        httpSession.setAttribute(name, value);
    }
}
