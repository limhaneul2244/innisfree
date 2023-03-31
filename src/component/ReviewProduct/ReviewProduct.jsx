import React, { useState } from 'react';
import Grade from '../Grade/Grade';
import css from '../../styles/ReviewProduct.module.scss';
import '../../../src/assets/common/reset.css';
import classNames from 'classnames';
/**
 * @param
 * @returns 고객님들의 솔직한 리뷰 product
 */
const ReviewProduct = ({width, height}) => {
    const [movingTop, setMovingTop] = useState(false);
    
    const onPdtSub = (e) => {
        if(e.type === 'mouseover') {
            setMovingTop(false)
        } else if (e.type === 'mouseout') {
            setMovingTop(true)
        }
    }

    return (
        <div className={css.reviewPdtWrap}
            style={{
                width: {width},
                height: {height}
            }}
        >
            <div className={classNames(css.pdtImg,'pdtImg')}>
                <img src="images/reviewImg01.jpg" alt="" />
            </div>
            <div 
                onMouseOver={onPdtSub}
                onMouseOut={onPdtSub}
                className={`${css.reviewPdtContent} ${!movingTop ? css.on : ''}`}
            >
                <div className={css.mainTitle}>그린티 씨드 히알루론산 세럼</div>
                <div className={css.pdtSub}>
                    <div className={css.subTitle}>예전 그린티 스킨이 패키지만 리뉴얼 된 줄 알았는데 이알루론산이 더해졌네요. 대신 예전꺼ㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹㄴㅁㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</div>
                    <Grade/>
                </div>
            </div>
        </div>
    )
}

export default ReviewProduct;