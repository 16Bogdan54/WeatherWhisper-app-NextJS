export const getUsers = (usersAmount: number) => {
    const res = fetch(`https://random-data-api.com/api/v2/users?size=${usersAmount}`)

    if (!res.ok) return throw new Error("no data")

    return res.json()
}