import React from 'react';
import css from '../../styles/Label.module.scss';
import classNames from 'classnames';

export const LabelType = {
    type1: 'lable01', //font 흰, 배경 초
    type2: 'lable02', //font 흰, 배경 검
    type3: 'lable03', //font 검, 배경 노랑
    type4: 'lable04', //font 검, 배경 흰, border 검정
}


/**
 * @param className component 위치 잡을 class받아옴
 * @param type 라벨 타입
 * @returns Label
 */
const Label = ({className, type}) => {
    return (
        <div className={className}>
            <div className={`${css.labelWrap} ${css[type]}`}>
                NEW
            </div>
        </div>
    )
}

export default Label;