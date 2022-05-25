import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className="divider">OR</div>
            <button className="btn btn-outline btn-primary w-full my-4" onClick={() => signInWithGoogle()}>Continue With Google</button>
            <button className="btn btn-outline w-full" onClick={() => signInWithGoogle()}>Continue With Github</button>
        </div>
    );
};

export default SocialLogin;