import React, { useState } from 'react';
import '../assets/common/reset.css';
import css from '../styles/Product.module.scss';
import classNames from 'classnames';
import Grade from './Grade';
import Price from './Price';

/**
 * @param width @param height
 * @returns 상품 개당
 */
const Product = ({width, height, id}) => {
    const [hovering, setHovering] = useState(false);
    const onProductHovering = (e) => {
        if(e.type === 'mouseover') {
            setHovering(true)
        } 
        else if(e.type === 'mouseout') {
            setHovering(false)
        }
    }

    return (
        <>
            <div 
                className={css.productWrap}
                style={{
                    width: width,
                    height: height,
                    border: hovering ? '1px solid #12b560' : '1px solid transparent'
                }}
            >
                {id}
                <div onMouseOver={onProductHovering} onMouseOut={onProductHovering} className={css.productImg}>
                    <div className={css.pdtImg}>
                        {
                            hovering ? 
                            <img className={classNames(css.overB)} src="images/chance/chance01_back.jpg" alt="" /> :
                            <img className={classNames(css.overF)} src='images/chance/chance01_front.jpg' alt="" />
                        }
                        <div className={css.pdtUtil}>
                            <div></div>
                        </div>
                    </div>
                    <div className={css.pdtContent}>
                        <div className={css.elip}>납작 브로우 펜슬 납작 브로우 펜슬 납작 브로우 펜슬 납작 브로우 펜슬 납작 브로우 펜슬 납작 브로우 펜슬</div>
                        <Price/>
                        <Grade/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product;