const Config = () => {
    if (process.env.NODE_ENV === 'production') {
        return {
            path: '',
        }
    }
    return {
        path: '',
    }
}

export default Config
