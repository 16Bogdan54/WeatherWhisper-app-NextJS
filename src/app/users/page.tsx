import React from 'react';
import {getUsers} from "@/lib/getUsers";

const Users = () => {

    const users = getUsers(4)

    console.log(users)

    return (
        <section>
            <h1>users</h1>
        </section>
    );
};

export default Users;