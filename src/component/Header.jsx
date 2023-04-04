import React, { useState } from 'react';
import '../assets/common/reset.css';
import css from '../styles/Header.module.scss';
import classNames from 'classnames';

const Header = () => {
    return (
        <>
            <div className={css.userBar}>
                <ul className='contentWrap'>
                    <li><a href="">고객센터</a></li>
                    <li className={css.about}><a href="">ABOUT US</a></li>
                    <li><a href="">로그인</a></li>
                    <li><a href="">회원가입</a></li>
                    <li><a href="">마이페이지</a></li>
                    <li className={css.basket}>
                        <a href="">장바구니
                            <span className={css.basketNum}>2</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={classNames(css.gnbMenu, 'contentWrap')}> 
                <div className={css.headerSearch}>
                    <div className={css.logo}>
                        <img src='/images/logo_basic.png' alt="" />
                    </div>
                    <div className={css.searchBarWrapper}>
                        <div className={css.serchBarInner}>
                            <input type="text" placeholder='새로워진 이니스프리 SHOWCASE'/>
                            <button className={css.searchBtn}>
                                <img src='/icon_search.png' alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <ul className={css.gnbList}>
                    <li>
                        <a href="">특가</a>
                        <span className={css.dot}></span>
                    </li>
                    <li><a href="">이벤트</a></li>
                    <li><a href="">베스트</a></li>
                    <li><a href="">신제품</a></li>
                    <li><a href="">라이브</a></li>
                    <li><a href="">FOR U</a></li>
                </ul>
            </div>
            <div className={css.category}>
                <div className={classNames(css.categoryInner, 'contentWrap')}>
                    <div className={css.categoryL}>
                        <CategoryItem>스킨케어</CategoryItem>
                        <CategoryItem>메이크업</CategoryItem>
                        <CategoryItem>남성</CategoryItem>
                        <CategoryItem>헤어/바디</CategoryItem>
                        <CategoryItem>기획 세트</CategoryItem>
                        <CategoryItem>미용소품</CategoryItem>
                    </div>
                    <div>
                        <CategoryItem>피부고민</CategoryItem>
                    </div>
                </div>
            </div>
            
            {/* 슬라이드 영역 */}
            <div className={css.mainSlide}>
                <img src="/images/mainSlide00.jpg" alt="" />
            </div>

        </>
    )
}

export default Header;


/**
 * 
 * @param children
 * @returns header 카테고리 CategoryItem
 */
export const CategoryItem = ({children}) => {
    const [isHovering, setIsHovering] = useState(false);
    const onHover = (e) => {
        if(e.type === 'mouseover') {
            setIsHovering(true)
        } 
        else if(e.type === 'mouseout') {
            setIsHovering(false)
        }
    }
    return (
        <>
            <div onMouseOver={onHover} onMouseOut={onHover}>
                <a href="">{children}</a>
                {isHovering && <MenuDepth/>}
            </div>
        </>
    )
}

/**
 * @param 
 * @returns 카테고리 hover시 하단 MenuDepth
 */
export const MenuDepth = () => {
    return (
        <div className={css.depthWrap}>
            <div className={css.depthWrapInner}>
                <div className={css.item}>스킨/토너/미스트</div>   
                <div className={css.item}>에센스/세럼/앰플</div>   
                <div className={css.item}>로션/크림</div>   
                <div className={css.item}>선케어</div>   
                <div className={css.item}>클렌징</div>   
                <div className={css.item}>팩/마스크</div>   
                <div className={css.item}>립/아이케어</div>   
                <div className={css.item}>오일/마사지</div>   
                <div className={css.item}>기획 세트</div>   
                <div className={css.item}>기타</div>
            </div>
        </div>
    )
}