import React from 'react';
import {getAllUsers} from "@/lib/getAllUsers";
import Link from 'next/link'
import {Card, CardHeader, CardContent, CardTitle, CardDescription} from '@/components/ui/card'
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Users'
}

const Users = async () => {
    const users :User[] = await getAllUsers()

    return (
        <section className="container flex flex-wrap gap-10 items-center justify-center p-10">
            {users.map((user: User) => (
                <Card className="max-w-[300px]" key={user.id}>
                    <CardHeader>
                        <Avatar>
                            <AvatarImage src={user.avatar} alt="avatar"></AvatarImage>
                            <AvatarFallback>{user.first_name.substring(0,2)}</AvatarFallback>
                        </Avatar>
                        <CardTitle>@<Link href={`/users/${user.id}`}>{user.username}</Link></CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur culpa distinctio dolorum nam natus nobis perspiciatis quidem rem sapiente?</p>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
};

export default Users;