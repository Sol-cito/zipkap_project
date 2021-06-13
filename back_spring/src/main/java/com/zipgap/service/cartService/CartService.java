package com.zipgap.service.cartService;

import com.zipgap.dao.CartDao;
import com.zipgap.vo.cartVO.CartVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class CartService implements ICartService {

    private final CartDao cartDao;

    public List<CartVO> wishAdd() {
        List<CartVO> fetchList = cartDao.wishAdd();
        return fetchList;
    }

    public List<CartVO> wishGet() {
        List<CartVO> fetchList = cartDao.wishGet();
        return fetchList;
    }
}
