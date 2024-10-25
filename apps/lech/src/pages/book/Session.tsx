import { useParams } from "react-router-dom"

export default function Session() {
    const { bid, sid } = useParams()
    return (
        <div>
            Book ID = {bid}
            Session ID = {sid}
        </div>
    )
}
