export const goToRegistration = (history) => {
    history.push("/signUp")
}

export const goToDetails = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToFeed = (history) => {
    history.push("/feed")
}