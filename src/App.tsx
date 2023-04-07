import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterBlock} from "./components/CounterBlock";
import {SettingBlock} from "./components/SettingBlock";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {InitialType} from "./Reduce/reduce";


function App() {
    const [open, setOpen] = useState(false);
    let {count} = useSelector<AppRootStateType, InitialType>(state => state.state)

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    return (
        <div className={'wrapper'}>
            <CounterBlock
                open={open}
                setOpen={setOpen}
                count={count}

            />
            {open && (
                <SettingBlock
                    open={open}
                    setOpen={setOpen}

                />
            )}
        </div>
    );
}

export default App;
