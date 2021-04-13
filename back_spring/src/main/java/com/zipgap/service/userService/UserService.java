package com.zipgap.service.userService;

import com.zipgap.entity.userEntity.UserRepository;
import com.zipgap.vo.userVO.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional // 트랜잭션 관리
public class UserService implements IUserService {
    /*
     * 스프링에서는 @Autowired 보다 생성자를 이용한 주입을 권장함.
     * 1) final 선언을 통해 객체의 불변 보장
     * 2) 순환 의존성 확인 가능 - @Autowired 필드주입은 순환의존성 확인이 되지 않아서 그대로 컴파일 됨.
     * 3) 필드 주입은 단위테스트 불가능...Spring이 주입해주므로 단위테스트 시 객체를 생성, 주입 할 수 없음
     * */
//    private final UserDao userDao;

    /* JPA 로 회원가입 로직 수행 */
    private final UserRepository userRepository;

    public void userRegistration(UserVO userVO) {
        userRepository.save(userVO.toEnity()).getEmail();
    }
}
