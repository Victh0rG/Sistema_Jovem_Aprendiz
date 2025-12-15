import LoginForm from '../components/LoginForm.js';
import PiauiImage from "../components/PiauiImage.js";
import logOut from "../components/logOut.js";

export const metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return (
        <>
            <div className=" absolute top-8 left-8">
                <PiauiImage/>
            </div>

            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">

                    <LoginForm />
                </div>
            </div>

        </>

    );
}