import React from 'react';
import MainText from './MainText';
import css from '../styles/ProductTitle.module.scss';
import classNames from 'classnames';
import '../assets/common/reset.css';

/**
 * @param titleName 타이틀 이름 
 * @param directName 바로가기 이름
 * @param rankingToggle main > 지금제일잘나가요 실시간 판매랭킹 토글버튼
 * @returns 상품 상단 타이틀
 */
const ProductTitle = ({titleName, directName, rankingToggle}) => {
    return (
        <div className={classNames(css.title, 'contentWrap')}>
            <MainText>{titleName}</MainText>
            <div 
                style={{
                    marginTop : rankingToggle ? '13px' : '',
                }}
            >
                {
                    rankingToggle && 
                    <div className={css.rankingLayOut}>
                        <div>
                            <div className={css.rankingToggle}>
                                <div className={classNames(css.realSale, css.on)}>실시간 판매 랭킹</div>
                                <div className={classNames(css.realCheck)}>실시간 조회 랭킹</div>
                            </div>
                        </div>
                    </div>
                }
                <div className={classNames(css.directBtn, rankingToggle && css.toggleBtnLayOut)}>{directName} 바로가기</div>
            </div>
        </div>
    )
}

export default ProductTitle;