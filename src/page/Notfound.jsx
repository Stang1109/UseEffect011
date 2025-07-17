import React, { use } from 'react'
import { useNavigate } from 'react-router'

function Notfound() {
    const [count, setConst] = useState(S)
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => { setConst(count - 1) }, 1000)
        if (count == 0) navigate('/')
    }, [count]) 
  return <div>Notfound {count}</div>
}

export default Notfound