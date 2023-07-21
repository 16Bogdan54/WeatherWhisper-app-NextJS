export const getUsers = async (usersAmount: number) => {
    const res = await fetch(`https://random-data-api.com/api/v2/users?size=${usersAmount}`)

    if (!res.ok) throw new Error('failed to fetch user')

    return res.json()
}