import ManageItemsPage from '@/components/ManageItems';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Manage Products",
  description: "Admin panel to update, edit, or delete existing tech products and track inventory status.",
};

const ManageProductPage = () => {
    return (
        <div>
            <ManageItemsPage></ManageItemsPage>
        </div>
    );
};

export default ManageProductPage;