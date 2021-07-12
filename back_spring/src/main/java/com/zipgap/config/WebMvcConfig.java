package com.zipgap.config;

import com.zipgap.interceptors.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/* Web MVC 설정과 관련된 클래스 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {

    /* 인터셉터 등록 */
    @Override
    public void addInterceptors(InterceptorRegistry interceptorRegistry){
        interceptorRegistry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/api/user/logout")
                .addPathPatterns("/api/user/withdrawal")
                .addPathPatterns("/api/user/getBasicInfo")
                .addPathPatterns("/api/user/checkCurPassword")
                .addPathPatterns("/api/user/changePassword")
                .addPathPatterns("/api/freeBoard/dislikePost")
                .addPathPatterns("/api/freeBoard/postSave")
                .addPathPatterns("/api/freeBoard/postDelete");
    }
}
