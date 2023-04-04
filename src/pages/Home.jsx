import React, { useState, useRef, useEffect } from 'react';
import '../assets/common/reset.css';
import '../assets/common/font.css';
import classNames from 'classnames';
import css from '../styles/pages/Home.module.scss';
//swiper
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Grid } from 'swiper';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import Header from '../component/Header';
import TopBanner from '../component/TopBanner';
import HashTag, { HashTagType } from '../component/HashTag';
import ProductTitle from '../component/ProductTitle';
import Product from '../component/Product';
import Label, { LabelType } from '../component/Label';
import ReviewProduct from '../component/ReviewProduct';

SwiperCore.use([Autoplay, Navigation, Grid]);

const Home = () => {
    const [hide, setHide] = useState(false);
    console.log('homeHide', hide)
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    console.log(now, year)

    return (
        <>  
            <TopBanner hide={hide} setHide={setHide}/>
            <div className={classNames(hide ?  css.noBannerWrap : css.bannerWrap )}>
                <Header/>
                <div className={css.keyWord}>
                    <div className={classNames(css.keyWordWrap, 'contentWrap')}>
                        <div className={css.keyWordName}>
                            <div className={css.keyWordTitle}>실시간 인기 #키워드</div>
                            <div className={css.date}>{`${year}-${month}-${date} 기준`}</div>
                        </div>
                        <div className={css.hashTagList}>
                            <HashTag type={HashTagType.type1}>#그린티</HashTag>
                            <HashTag type={HashTagType.type1}>#스킨</HashTag>
                            <HashTag type={HashTagType.type1}>#남성스킨케어</HashTag>
                            <HashTag type={HashTagType.type1}>#브로우</HashTag>
                            <HashTag type={HashTagType.type1}>#마스카라</HashTag>
                            <HashTag type={HashTagType.type1}>#톤업</HashTag>
                            <HashTag type={HashTagType.type1}>#그린티세럼</HashTag>
                            <HashTag type={HashTagType.type1}>#노세범</HashTag>
                            <HashTag type={HashTagType.type1}>#립</HashTag>
                            <HashTag type={HashTagType.type1}>#블루베리</HashTag>
                        </div>
                    </div>
                </div>
            
                {/* 지금이 쇼핑찬스 */}
                <div className={css.chance}>
                    <div className={css.chanceWrap}>
                        <ProductTitle titleName={'지금이 쇼핑찬스'} directName={'특가'} rankingToggle={false}/>
                        <div className={css.swiperWrap1440}>
                            <Swiper
                                className={css.customSwiper1280}
                                spaceBetween= {8}
                                slidesPerView= {4}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                grid={{
                                    rows: 2,
                                    fill: 'row',
                                }}
                                modules={[Grid, Navigation]}
                            >
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Product width={314} height={520}/>
                                </SwiperSlide>
                            </Swiper>
                            <div className={`${css['swiper-button-prev']} swiper-button-prev`}></div>
                            <div className={`${css['swiper-button-next']} swiper-button-next`}></div>
                        </div>
                    </div>
                </div>
                {/* 이 상품 관심있지 않으세요? */}
                <div className={css.interest}>
                    <div className={classNames(css.interestWrap)}>
                        <ProductTitle titleName={'이 상품 관심있지 않으세요?'} directName={'FOR U'} rankingToggle={false}/>
                        <div className={css.interestSwiperWrap}>
                            <Swiper
                                className={css.customSwiper1}
                                spaceBetween= {16}
                                slidesPerView= {'auto'}
                                grabCursor={true}
                                centeredSlides={true}
                                initialSlide={1}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                {[1,2,3,4,5,6,7,8,9].map(id => {
                                    return (
                                        <SwiperSlide className={classNames(css.showCase1)}>
                                            <Product key={id} width={416} height={558} id={id}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <div className={css.swiperWrap1}>
                                <div className={`${css['swiper-button-prev']} swiper-button-prev`}></div>
                                <div className={`${css['swiper-button-next']} swiper-button-next`}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 고객님에게 딱이에요! */}
                <div className={css.forU}>
                    <div className={css.topBox}>
                        <div className={classNames(css.tobBoxWrap,'contentWrap')}>
                            <div className={css.forMainTitle}>
                                <div className={css.label}></div>
                                <div>고객님에게 딱이에요!</div>
                            </div>
                            <div className={css.skinTypeWrap}>
                                <button className={css.skinOption}>건성</button> <span>피부와</span> 
                                <button className={css.skinOption}>모공/주름/탄력</button> 고민에 추천드려요
                            </div>
                        </div>
                    </div>
                    <div className={classNames(css.suggestedPdt,'contentWrap')}>
                        <div className={css.grid}>
                            <Product className={css.gridCell} width={416} height={524}/>
                            <Product className={css.gridCell} width={416} height={524}/>
                            <Product className={css.gridCell} width={416} height={524}/>
                            <Product className={css.gridCell} width={416} height={524}/>
                            <Product className={css.gridCell} width={416} height={524}/>
                            <Product className={css.gridCell} width={416} height={524}/>
                        </div>
                    </div>
                    <div className={ classNames(css.moreWrap,'contentWrap')}>
                        <button 
                            className={css.refreshBtn}
                        >
                            <span>새로운 추천을 받고 싶어요</span>
                            <span className={css.pageNum}> 
                                <span>1</span>
                                <span className={css.lastNum}> / <span>3</span></span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* 지금 제일 잘나가요 */}
                <div className={css.ranking}>
                    <div className={classNames(css.rankingWrap)}>
                        <ProductTitle titleName={'지금 제일 잘나가요'} directName={'베스트'} rankingToggle={true}/>
                        <div className={css.rankingSwiperWrap}>
                            <Swiper
                                spaceBetween= {8}
                                slidesPerView= {'auto'}
                                grabCursor={true}
                                centeredSlides={false}
                                initialSlide={1}
                                loop={false}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                {[1,2,3,4,5,6,7,8,9,10,11,12].map(id => {
                                    return (
                                        <SwiperSlide className={classNames(css.rankingShowCase)}>
                                            <Product key={id} width={314} height={454} id={id}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <div className={css.swiperWrap1}>
                                <div className={`${css['swiper-button-prev']} swiper-button-prev`}></div>
                                <div className={`${css['swiper-button-next']} swiper-button-next`}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 주목해야할 신제품 */}
                <div className={classNames(css.newPdt, 'contentWrap')}>
                    <div className={css.newPdtWrap}>
                        <ProductTitle titleName={'주목해야 할 신제품 추천'} directName={'신제품'} rankingToggle={false}/>
                        <ul className={css.newPdtList}>
                            <li className={css.pdtImg}>
                                <div className={css.pdtImgCon}>
                                    <img src={'images/newPdt01.jpg'} alt="" />
                                    <Label type={LabelType.type1} className={`${css['labelPosition']}`}/>
                                </div>
                                <div className={css.pdtContent}>
                                    <div className={css.mainTitle}>속수분 전용 세럼</div>
                                    <div className={css.subTitle}>강력한 속건조 개선력으로 업그레이드 된 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼</div>
                                </div>
                            </li>
                            <li className={css.pdtImg}>
                                <div className={css.pdtImgCon}>
                                    <img src={'images/newPdt01.jpg'} alt="" />
                                    <Label type={LabelType.type1} className={`${css['labelPosition']}`}/>
                                </div>
                                <div className={css.pdtContent}>
                                    <div className={css.mainTitle}>속수분 전용 세럼</div>
                                    <div className={css.subTitle}>강력한 속건조 개선력으로 업그레이드 된 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼</div>
                                </div>
                            </li>
                            <li className={css.pdtImg}>
                                <div className={css.pdtImgCon}>
                                    <img src={'images/newPdt01.jpg'} alt="" />
                                    <Label type={LabelType.type1} className={`${css['labelPosition']}`}/>
                                </div>
                                <div className={css.pdtContent}>
                                    <div className={css.mainTitle}>속수분 전용 세럼</div>
                                    <div className={css.subTitle}>강력한 속건조 개선력으로 업그레이드 된 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼</div>
                                </div>
                            </li>
                            <li className={css.pdtImg}>
                                <div className={css.pdtImgCon}>
                                    <img src={'images/newPdt01.jpg'} alt="" />
                                    <Label type={LabelType.type1} className={`${css['labelPosition']}`}/>
                                </div>
                                <div className={css.pdtContent}>
                                    <div className={css.mainTitle}>속수분 전용 세럼</div>
                                    <div className={css.subTitle}>강력한 속건조 개선력으로 업그레이드 된 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼 #그린티씨드히알루론산세럼</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 솔직 리뷰 */}
                <div className={css.grayCommonBg}>
                    <div className={css.grayCommonBgWrap}>
                        <ProductTitle titleName={'고객님들의 솔직한 리뷰'} directName={'신제품'} rankingToggle={false}/>
                        <div className={css.swiperWrap1440}>
                            <Swiper
                                className={classNames(css.reviewSwiper, 'contentWrap')}
                                spaceBetween= {15}
                                slidesPerView= {'auto'}
                                centeredSlides={false}
                                loop={false}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                modules={[Autoplay, Navigation]}
                            >
                                <SwiperSlide className={classNames(css.reviewShowCase)}>
                                    <ReviewProduct width={416} height={588}/>
                                </SwiperSlide>
                                {/* <SwiperSlide className={classNames(css.reviewShowCase)}>
                                    <ReviewProduct width={416} height={588}/>
                                </SwiperSlide>
                                <SwiperSlide className={classNames(css.reviewShowCase)}>
                                    <ReviewProduct width={416} height={588}/>
                                </SwiperSlide>
                                <SwiperSlide className={classNames(css.reviewShowCase)}>
                                    <ReviewProduct width={416} height={588}/>
                                </SwiperSlide>
                                <SwiperSlide className={classNames(css.reviewShowCase)}>
                                    <ReviewProduct width={416} height={588}/>
                                </SwiperSlide>
                                <SwiperSlide className={classNames(css.reviewShowCase)}>
                                    <ReviewProduct width={416} height={588}/>
                                </SwiperSlide> */}
                            </Swiper>
                            <div className={`${css['swiper-button-prev']} swiper-button-prev`}></div>
                            <div className={`${css['swiper-button-next']} swiper-button-next`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;