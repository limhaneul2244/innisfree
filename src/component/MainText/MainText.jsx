import React from 'react';
import css from '../../styles/MainText.module.scss';

/**
 * @param children
 * @returns MainText (섹션별 메인 텍스트)
 */
const MainText = ({children}) => {
    return (
        <div className={css.mainTitle}>
            {children}
        </div>
    )
}

export default MainText;