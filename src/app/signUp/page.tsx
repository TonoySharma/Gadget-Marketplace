import RegisterPage from '@/components/SignUpSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Create an Account",
    description: "Join My Gadget Hub today. Register now to unlock premium member benefits, faster checkout, and exclusive gadget deals.",
};


const SignUpPage = () => {
    return (
        <div>
            <RegisterPage></RegisterPage>
        </div>
    );
};

export default SignUpPage;