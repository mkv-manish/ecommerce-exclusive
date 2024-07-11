'use client'

import { useSession } from 'next-auth/react';
import { ProfileForm } from './ProfileForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const AuthForm = ({ type }: { type: string }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    useEffect(() => {
        if (status === 'authenticated') {
            router.push(callbackUrl); // Redirect to home page or dashboard
        }
    }, [status, router, callbackUrl]);

    if (status === 'loading') {
        return <div>Loading...</div>; // Or a more sophisticated loading component
    }

    if (status === 'authenticated') {
        return null; // This will prevent the form from rendering while redirecting
    }

    return (
        <>
            <div className="w-[40%] pr-12 flex flex-col justify-center gap-6">
                <div className='space-y-3'>
                    <h1 className="text-3xl font-normal">{type === "sign-in" ? "Log in to Exclusive" : "Create an account"}</h1>
                    <p className="text-gray-600">Enter your details below</p>
                </div>

                <ProfileForm type={type} callbackUrl={callbackUrl} />

                {type === "sign-up" &&
                    <p className="m4-6 text-black/[0.6] text-center">
                        Already have an account?{' '}
                        <a href="/sign-in" className="underline underline-offset-[6px] ml-2">
                            Log in
                        </a>
                    </p>
                }
            </div>
        </>
    );
};

export default AuthForm;