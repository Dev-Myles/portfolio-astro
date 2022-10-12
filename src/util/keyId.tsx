import { v4 as uuidv4 } from 'uuid'

function createKey(){
    return uuidv4()
}

export default createKey;