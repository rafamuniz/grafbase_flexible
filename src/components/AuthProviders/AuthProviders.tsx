"use client"

import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

import { Provider } from './AuthProviders.type';

import IconButton from '../../@core/IconButton';

type Providers = Record<string, Provider>;

const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();

            setProviders(res);
        }

        fetchProviders();
    }, []);

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, i) => (
                    <IconButton key={i} title='Sign In' handleClick={() => signIn(provider?.id)} />
                ))}
            </div>
        )
    }
}

export default AuthProviders