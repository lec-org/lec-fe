import { useNavigate } from "react-router-dom"

export default function BookList() {
    const navigator = useNavigate()
    return (
        <div>BookList
            <button onClick={() => navigator(`/book/${Math.floor(Math.random() * 100000)}`)}>Click me to go to a random book</button>
        </div>
    )
}
