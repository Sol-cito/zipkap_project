package com.zipgap.service.cartService;

import com.zipgap.dao.CartDao;
import com.zipgap.vo.cartVO.CartVO;
import com.zipgap.vo.listVO.ListVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class CartService implements ICartService {

    private final CartDao cartDao;

    public void insertWish(CartVO cart) {
        System.out.println(2);
        cartDao.insertWish(cart);
    }

    public List<ListVO> selectWish(String cart_email) {
        List<ListVO> fetchList = cartDao.selectWish(cart_email);
        System.out.println(2);
        return fetchList;
    }

    public void deleteWish(CartVO cart) {
        System.out.println(2);
        cartDao.deleteWish(cart);
    }
}
