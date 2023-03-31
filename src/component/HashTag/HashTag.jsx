import css from '../../styles/HashTag.module.scss';

export const HashTagType = {
    type1: 'hashTag01',
    type2: 'hashTag02'
}

/**
 * @param type01 border-radius 16px
 * @param type02 border-radius 10px
 * @returns HashTag
 */
const HashTag = ({children, type}) => {

    return (
        <>
            <div className={css[type]}>
                {children}
            </div>
        </>
    )
}

export default HashTag;