import React, {useState} from 'react'

function Like() {
    let [likeCount, setCount] = useState(0)

    return(
        <div className="like">
            <button className="down" onClick={() => setCount(likeCount -= 1)}></button>
            {likeCount}
            <button className="up" onClick={() => setCount(likeCount += 1)}></button>
        </div>
    )
}

export default Like