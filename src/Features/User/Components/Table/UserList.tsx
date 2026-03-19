
import type { User } from "../../types";
import { Table } from "antd";
import './UserList.css';


export default function UserList({ users, loading }: { users: User[], loading: boolean }) {

    return (
        <div className="user-list-container">
            <Table 
            loading={loading}
            dataSource={users}
            rowKey="email"
            pagination={users.length >= 5 ? {
                pageSize: 5,
                pageSizeOptions: [10, 20],
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `Total ${total} items`
            } : false}
            columns={[{
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            }, {
                title: 'Balance',
                dataIndex: 'balance',
                key: 'balance',
                render: (balance: number) => {
                    if (balance === undefined || balance === null) return '-';
                    return `$${balance.toFixed(2)}`;
                }
            }, {
                title: 'Date of Birth',
                dataIndex: 'dateOfBirth',
                key: 'dateOfBirth',
                render: (date: Date) => {
                    if (!date) return '-';
                    return new Date(date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    });
                }
            }, {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                render: (gender: string) => {
                    if (!gender) return '-';
                    return gender.charAt(0).toUpperCase() + gender.slice(1);
                }
            }, {
                title: 'Continent',
                dataIndex: 'continent',
                key: 'continent',
                render: (continent: string) => {
                    if (!continent) return '-';
                    const continentMap: { [key: string]: string } = {
                        'northAmerica': 'North America',
                        'southAmerica': 'South America',
                        'europe': 'Europe',
                        'asia': 'Asia',
                        'oceania': 'Oceania',
                        'antarctica': 'Antarctica'
                    };
                    return continentMap[continent] || continent;
                }
            }]} />
        </div>
    )
}