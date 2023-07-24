import React, {Suspense} from 'react';
import {Metadata} from "next";
import {getUser} from "@/lib/getUser";
import {notFound} from "next/navigation";
import UserPost from "@/components/UserPost";

type Params = {
    params: {
        userId: string
    }
}

export const generateMetadata = async ({params: {userId}}:Params):Promise<Metadata> => {
    const userData: Promise<User> =  getUser(userId);
    const user = await userData

    if(!user.username) {
        return {
            title: "User Not Found"
        }
    }

    return {
        title: user.name,
        description: `Page of ${user.name}`
    }
}

const User = async ({params: {userId}}:Params) => {
    const user = await getUser(userId);

    if(!user.name) notFound();

    return (
        <div>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPost promise={userPostsData} />
            </Suspense>
        </div>
    );
};

export default User;