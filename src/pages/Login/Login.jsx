import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';

const Login = () => {
    const { loginWithEmailAndPassword, user, handleToggleWatch, setUser, loading, setLoading, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state

    console.log(location, from);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in successfully   
                const user = userCredential.user;
                setUser(user);
                console.log('User logged in:', user);
                setLoading(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error logging in:', errorCode, errorMessage);
                setLoading(false);
            });
    }
    if (user) {
        // return <Navigate to="/" />
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <SEO title={'Swiftcart | Login'} description={'Sign in to your Swiftcart account to view orders, manage profile, and checkout faster.'} />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
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
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log in
                        </button>
                    </div>

                    {/* Divider + Google Sign-In */}
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <hr className="flex-1 border-t border-gray-200" />
                            <span className="text-xs text-gray-400">or</span>
                            <hr className="flex-1 border-t border-gray-200" />
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                if (!googleSignIn) return;
                                googleSignIn()
                                    .then((result) => {
                                        const user = result.user;
                                        console.log('Google Sign-In successful:', user);
                                        navigate(location.state?.from?.pathname || '/');
                                    })
                                    .catch((error) => {
                                        console.error('Error during Google Sign-In:', error);
                                    });
                            }}
                            disabled={loading}
                            className="mt-4 btn btn-outline btn-neutral w-full flex items-center justify-center gap-3"
                        >
                            <FaGoogle className="text-red-500" />
                            <span className="font-medium">Sign in with Google</span>
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;