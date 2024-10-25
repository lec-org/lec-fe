import { Outlet, useParams } from "react-router-dom"

export default function Book() {
    const { bid } = useParams()

    return (
        <div>
            Book Id = {bid}
        </div>
    )
}
