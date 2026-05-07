import React, { useState } from 'react';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { useTheme } from './shared/theme';

function LoginCard() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { themeName } = useTheme();

    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const validate = () => {
        const newErrors: typeof errors = {};

        // Username validation
        if (!username.trim()) {
            newErrors.username = 'Username is required';
        } else if (username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Login success (mock)');
        }
    };

    const inputBase =
        'w-full px-3 py-2 rounded-md border outline-none transition';

    const inputNormal =
        'bg-bg-secondary text-text-primary border-border-secondary';

    const inputError =
        `${themeName === 'dark'
            ? 'bg-red-900'
            : 'bg-red-200'
        } text-text-primary border-danger`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
            <div className="flex gap-2 absolute top-4 right-10">
                <ThemeToggleSwitch />
            </div>

            <div className="w-full max-w-sm bg-bg-secondary border border-border-primary rounded-lg shadow-md p-6 space-y-4">

                <h2 className="text-lg font-semibold text-text-primary">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="cursor-pointer block text-sm text-text-secondary mb-1">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`${inputBase} ${errors.username ? inputError : inputNormal
                                }`}
                        />
                        {errors.username && (
                            <p className="mt-1 text-sm text-danger font-weight-900">
                                {errors.username}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="cursor-pointer block text-sm text-text-secondary mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`${inputBase} ${errors.password ? inputError : inputNormal
                                }`}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-danger">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Forgot password */}
                    <div className="text-right">
                        <a
                            href="#"
                            className="text-sm text-text-secondary hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-2 rounded-md bg-bg-tertiary text-text-primary border border-border-secondary hover:bg-bg-primary transition"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginCard;