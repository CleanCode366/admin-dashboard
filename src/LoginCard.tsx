function LoginCard() {

    const handleGoogleLogin = () => {
        // Replace with your actual backend OAuth endpoint
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-bg-primary" >
            <div className="w-full max-w-sm bg-bg-secondary border border-border-primary rounded-lg shadow-md p-6 space-y-6" >

                {/* Heading */}
                <div className="space-y-1">
                    <h2 className="text-2xl text-center font-semibold text-text-primary">
                        Welcome
                    </h2>

                    <p className="text-sm text-center my-3 text-text-secondary">
                        Sign in using your Google account
                    </p>
                </div>

                {/* Google OAuth Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="
                        cursor-pointer
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-3
                        py-3
                        rounded-md
                        bg-bg-tertiary
                        text-text-primary
                        border
                        border-border-secondary
                        hover:bg-bg-primary
                        transition
                    "
                >
                    {/* Google Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-5 h-5"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                        />
                        <path
                            fill="#FF3D00"
                            d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7.1l6.2 5.2C39.1 36.7 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
                        />
                    </svg>

                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-xs text-center text-text-tertiary">
                    By continuing, you agree to our <a href="/terms" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}

export default LoginCard;