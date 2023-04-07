import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {InitialType, ResetCountAC, setLimit, setMaxValue, setMinValue} from "../Reduce/reduce";


export type SettingType = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const SettingBlock: React.FC<SettingType> = ({
                                                        open,
                                                        setOpen,

                                                    }) => {

    let {minValue, maxValue} = useSelector<AppRootStateType, InitialType>(state => state.state)
    const dispatch = useDispatch()

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValue(+e.currentTarget.value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(+e.currentTarget.value))
    }

    const setLimitForCount = () => {
        dispatch(ResetCountAC())
        dispatch(setLimit())
        setOpen(!open)
    }


    return (

        <div className="container">
            <div className={'inputBlock'}>
                <div><span className={'title'}> start value</span> <input className={'input'} type="number"
                                                                          value={minValue} onChange={onChangeMinValue}/>
                </div>
                <div><span className={'title'}> max Value</span> <input className={'input'} type="number"
                                                                        value={maxValue} onChange={onChangeMaxValue}/>
                </div>

            </div>

            <SuperButton callBack={setLimitForCount}
                         disabled={minValue > maxValue || minValue < 0 || minValue === maxValue}>Set</SuperButton>

        </div>
    )
}