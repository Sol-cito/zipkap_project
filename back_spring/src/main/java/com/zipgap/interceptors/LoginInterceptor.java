package com.zipgap.interceptors;


import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/* Login이 되어있는지 아닌지 확인하는 인터셉터이다 */
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession httpSession = request.getSession();
        String sessionItem = (String) httpSession.getAttribute("Test"); // name은 나중에 따로 enum 등으로 만들 것
        if (sessionItem == null) {
            response.getOutputStream().println("Login required!!!!!!!");
            return false; // 세션에 등록된 것이 없으면 바로 false - 컨트롤러로 가지 않음
        }
        return true; // 리턴값 true시 컨트롤러로 넘어갔다가 postHandler까지 감
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    }
}
