import UserForm from "../Components/Form/UserForm";
import { useEffect, useState } from "react";
import type { User } from "../types";
import UserList from "../Components/Table/UserList";
import { getUserList } from "../../../Services/UserService";
import Swal from 'sweetalert2';
import { Typography } from 'antd';
import './UserPage.css';

const { Title } = Typography;

    export default function UserPage() {

        const [users, setUsers] = useState<User[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        
        const errorAlert = () => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Could not fetch list.',
            });
        }
        
        useEffect(() => {            
            getUserList()
                .then((users) => {
                    setUsers(users);
                })
                .catch(() => errorAlert())
                .finally(() => setLoading(false));
        }, []);

        const handleUserCreated = () => {
            setLoading(true);
            getUserList().then((users) => {
                setUsers(users);
            })
            .catch(() => errorAlert())
            .finally(() => {
                setLoading(false);
            });
        };

        return (
            <div className="user-page-container">
                <Title level={2} className="user-page-title">Gestión de Usuarios</Title>
                <div className="user-page-sections">
                    <UserForm onUserCreated={handleUserCreated} />
                    <UserList users={users} loading={loading} />
                </div>
            </div>
        )
    }