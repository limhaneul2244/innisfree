import { useCallback } from 'react';
import '../assets/common/reset.css';
import css from '../styles/TopBanner.module.scss';
import classNames from 'classnames';

/**
 * @param
 * @returns TopBanner
 */
const TopBanner = ({hide, setHide}) => {

    const onTopBannerButton = useCallback (()=> {
        setHide(!hide);
    }, [])
    return (
        <>
            <div className={
                classNames(css.topBanner, (hide ? css.hide:''))}>
                <div className={css.contentWrap}>
                    <a href="">신규가입하고 3만원 이상 결제 시 웰컴 기프트 증정</a>
                    <button onClick={onTopBannerButton}>
                        <img src="images/btn_top_banner_close2.png" alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TopBanner;