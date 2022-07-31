import { useQuery } from 'react-query';
import Product from './Product';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const { data: items, isLoading, refetch } = useQuery('items', () => fetch(`https://vast-citadel-09653.herokuapp.com/parts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    )
        .then(response => response.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item's Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map((item, index) => <Product key={item._id} item={item} index={index} refetch={refetch}></Product>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;