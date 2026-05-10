import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const SignUp = () => {
    const { signupWithEmailAndPassword,handleToggleWatch, updateUserProfile, user, loading, setLoading } = useAuth();
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, password === confirmPassword);

        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        signupWithEmailAndPassword(email, password)
            .then(() => {
                // Signed up successfully 
                updateUserProfile(name, photoURL)
                    .then(() => {
                        window.location.reload();
                        // navigate(location.state?.from?.pathname || '/');
                        console.log('User signed up and profile updated:', user);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error updating profile:', error.message);
                        setLoading(false);
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing up:', errorCode, errorMessage);
                setLoading(false);
            });
    }



    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Create your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Photo URL
                        </label>
                        <div className="mt-2">
                            <input
                                name="photoURL"
                                type="text"
                                required
                                autoComplete="photoURL"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                onDoubleClick={handleToggleWatch}
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm/6 font-medium text-gray-900">
                                Confirm Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                name="confirmPassword"
                                type="password"
                                required
                                onDoubleClick={handleToggleWatch}
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {loading ? <span className="loading loading-spinner loading-xs"></span>
                                : 'Create'}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already a member?{' '}
                    <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Log in
                    </Link>
                </p>
            </div>

            {user && <div className="mt-10 text-center text-sm/6 text-gray-500">
                <p>
                    Signed in as: <span className="font-semibold text-indigo-600">{user.email}</span>
                    <br />
                    {user.displayName && <span>Display Name: {user.displayName}</span>}
                    {user.photoURL && <span>Photo URL: {user.photoURL}</span>}
                </p>
            </div>}
        </div>
    );
};

export default SignUp;