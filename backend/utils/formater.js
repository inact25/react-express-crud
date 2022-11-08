const generateJson = (res, data, text) => {
    if (data) {
        return res.json({
            message: text,
            data: data
        })
    } else {
        return res.json({
            message: text,
        })
    }
}

export {
    generateJson
}
