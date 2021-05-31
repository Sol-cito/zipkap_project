package com.zipgap.service.userService;

import com.zipgap.entity.userEntity.User;
import com.zipgap.entity.userEntity.UserRepository;
import com.zipgap.dto.LoginInfoDTO;
import com.zipgap.vo.userVO.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
        userRepository.save(userVO.toEnity());
    }

    /*
     * 옵셔널 객체가 보유한 값이 Null인지 아닌지 검사.
     * Null이면(아이디 중복이 없으면) false를 반환한다.
     * Null이 아니면(아이디가 중복되면) true를 반환한다.
     */
    public boolean checkDuplicateEmail(UserVO userVO) {
        System.out.println("============이메일 중복검사 수행===========");
        return userRepository.existsById(userVO.getEmail());
    }

    public boolean checkDuplicateNickName(UserVO userVO) {
        System.out.println("============닉네임 중복검사 수행===========");
        List<User> userList = userRepository.findAll();
        for (User user : userList) {
            if (user.getNickName().equals(userVO.getNickName())) {
                return true;
            }
        }
        return false;
    }

    /* id, password가 DB에 있는지 확인 */
    public boolean loginUser(LoginInfoDTO loginInfoDTO) {
        List<User> userList = userRepository.findAll();
        for (User user : userList) {
            if (user.getEmail().equals(loginInfoDTO.getId()) && user.getPassword().equals(loginInfoDTO.getPassword())) {
                return true;
            }
        }
        return false;
    }

    /* 회원 탈퇴 기능을 수행하는 메소드 */
    public void withdraw(String userId) {
        userRepository.deleteById(userId);
    }

    /* 회원 기본 정보를 얻는 메소드 */
    public User getBasicInfo(String id) {
        return userRepository.findById(id).get();
    }

    /* 비밀번호를 변경하는 메소드 */
    public boolean changePassword(String id, String password) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User targetUser = user.get();
            User updateUser = User.builder()
                    .email(targetUser.getEmail())
                    .name(targetUser.getName())
                    .nickName(targetUser.getNickName())
                    .password(password)
                    .build();
            userRepository.save(updateUser);
            return true;
        }
        return false;
    }
}
