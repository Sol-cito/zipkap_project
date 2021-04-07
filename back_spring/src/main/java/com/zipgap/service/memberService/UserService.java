package com.zipgap.service.memberService;

import com.zipgap.dao.UserDao;
import com.zipgap.vo.userVO.RegistrationVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService implements IUserService {
    /*
    * 스프링에서는 @Autowired 보다 생성자를 이용한 주입을 권장함.
    * 1) final 선언을 통해 객체의 불변 보장
    * 2) 순환 의존성 확인 가능 - @Autowired 필드주입은 순환의존성 확인이 되지 않아서 그대로 컴파일 됨.
    * 3) 필드 주입은 단위테스트 불가능...Spring이 주입해주므로 단위테스트 시 객체를 생성, 주입 할 수 없음
    * */
    private final UserDao userDao;

    @Override
    public void userRegistration(RegistrationVO registrationVO) {

    }
}
