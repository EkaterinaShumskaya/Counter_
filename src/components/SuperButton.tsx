import React, { CSSProperties } from 'react';


type PropsType = {
    callBack: () => void
    children: React.ReactNode
    disabled?: boolean
    style?: CSSProperties | undefined;
}

export const SuperButton: React.FC<PropsType> = ({callBack, disabled , children, style}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button className={'buttons'} disabled={disabled} onClick={onClickHandler}>{children}</button>
    )
}