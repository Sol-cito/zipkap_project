package com.zipgap;

import com.zipgap.interceptors.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/* Web MVC 설정과 관련된 클래스 */
@Configuration
public class WebMvcConfiguration extends WebMvcConfigurationSupport {

    /* 로그인 인터셉터 등록 */
    @Override
    public void addInterceptors(InterceptorRegistry interceptorRegistry){
//        interceptorRegistry.addInterceptor(new LoginInterceptor())
//                .addPathPatterns("/api/user/login");
    }
}
