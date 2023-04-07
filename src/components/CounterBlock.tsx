import React, {useEffect} from 'react';
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {InitialType, ResetCountAC, setCount} from "../Reduce/reduce";


export type CounterType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    count: number,

};

export const CounterBlock: React.FC<CounterType> = ({
                                                        open,
                                                        setOpen,
                                                        count


                                                    }) => {
    let {minValue, maxValue} = useSelector<AppRootStateType, InitialType>(state => state.state)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [minValue, maxValue]);

    const AddCount = () => {
        if (count < maxValue) {
            dispatch(setCount())
        }
    }
    const ResetCount = () => {
        dispatch(ResetCountAC())
    }

    const onClickSettingsHandler = () => {
        setOpen(!open);
    };
    const isError = count === maxValue
    const isDisabled = minValue < 0 || minValue === maxValue || maxValue < minValue;
    const counter = isDisabled ? <span>Incorrect value!</span> : <span>{count}</span>;


    return (
        <div className="container">
            <div className={isError ? "countStyle_error" : "countStyle"}> {counter} </div>
            <div className={'buttonBlock'}>
                <SuperButton callBack={AddCount}
                             disabled={count === maxValue}>
                    Increment
                </SuperButton>
                <SuperButton callBack={ResetCount}>Reset</SuperButton>
                <SuperButton callBack={onClickSettingsHandler}>Setting</SuperButton>
            </div>


        </div>
    )

}