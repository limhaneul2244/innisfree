import React from 'react';
import css from '../../styles/Grad.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/**
 * @param
 * @returns 별 + 평점 + 후기 개수
 */
const Grade = () => {
    return (
        <div className={css.grade}>
            <FontAwesomeIcon className={css.star} icon={faStar} />
            <span>4.7 <span>(23,1212)</span></span>
        </div>
    )
}

export default Grade;