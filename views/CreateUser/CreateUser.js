import Head from 'next/head';
import { useUser } from '@clerk/clerk-react';
import { Button, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import useCreateUser from './useCreateUser';

const CreateUser = ({ ...props }) => {
    const user = useUser();
    const [displayName, setDisplayName] = useState('');
    const { submitCreateUser } = useCreateUser(props);

    return (
        <div className="container">
            <Head>
                <title>Type Warrior</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <div>
                <Heading as="h1">Create User</Heading>
                <Heading as="h3">Choose a display name</Heading>
                <Input onBlur={(e) => setDisplayName(e.target.value)}></Input>
                {/* <Button onClick={() => console.log(user.id)}>log</Button> */}
                <Button onClick={() => submitCreateUser(user.id, displayName)}>
                    Create!
                </Button>
            </div>
        </div>
    );
};
  
export default CreateUser;