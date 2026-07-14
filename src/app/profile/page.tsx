import ProfilePage from '@/components/ProfilePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "My Profile",
    description: "Manage your account settings, secure your login details, and view your purchase history on My Gadget Hub.",
};

const MyProfilePage = () => {
    return (
        <div>
            <ProfilePage></ProfilePage>
        </div>
    );
};

export default MyProfilePage;