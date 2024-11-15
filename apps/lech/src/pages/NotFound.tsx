/**
 * @file NotFound.tsx
 * @description NotFound 页，3s 后自动跳转到上一界面
 * @author Apries
 */
import { TIME } from "@/constants/time";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigator = useNavigate()
    // TIME 提供毫秒值时间
    const [counter, setCounter] = useState(TIME.wait2redirect / 1000);
    useEffect(() => {
        const timer = counter > 0 ?
            setInterval(() => setCounter(counter - 1), 1000)
            :
            navigator(-1)

        return () => {
            if (timer) {
                clearInterval(timer)
            }
        }
    }, [counter, navigator])

    return (
        <>
            <div>NotFound</div>
            <div>{counter}秒后自动跳转到上一界面</div>
        </>
    )
}



