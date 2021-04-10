/* 회원가입 검증하는 함수 따로 js로 모듈화 */

export const checkEmailValidity = (emailParam) => { // 정규식으로 이메일 검증
    var regularExpression = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regularExpression.test(emailParam);
}

export const checkNicknameValidity = (nicknameParam) => { // 닉네임 글자 수 검증
    return nicknameParam.length >= 1 && nicknameParam.length <= 8;
}

export const checkPasswordValidity = (passwordParam) => { // 정규식으로 비밀번호 검증
    /* 최소 8 자 및 최대 16 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상 */
    var regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
    return regularExpression.test(passwordParam);
}