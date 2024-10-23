import { useParams } from 'react-router-dom'

const Talk = () => {
    const { talkTag } = useParams()
    console.log('param', talkTag)
    return (
        <div>Talk : {talkTag} </div>
    )
}

export default Talk