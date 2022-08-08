const baseUrl =  process.env.MYSQL_URL

export const getDados = async (url, token) => {
    try {    
        const res = await fetch(`${baseUrl}/${url}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + process.env.TOKEN
            },            
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }  
}

export const postDados = async (url, post, token) => {
    return await fetch(`${baseUrl}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            post
        })
    }).then((response) => response.json())
    .catch((error) => {
        console.log("Error: ", error);
    })    
}



export const putDados = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const patchDados = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}


export const deleteDados = async (url, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}