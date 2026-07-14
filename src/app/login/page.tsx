import LoginPage from '@/components/LoginSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login to Your Account",
  description: "Sign in to My Gadget Hub securely to manage your orders, wishlist, and personalized tech feed.",
};

const LogInPage = () => {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
};

export default LogInPage;