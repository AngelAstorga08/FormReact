import { Form, Input, Button, DatePicker, Select, Radio, InputNumber } from 'antd';
import { useState } from 'react';
import type { User, UserForm } from '../../types';
import { createUser } from '../../../../Services/UserService';
import Swal from 'sweetalert2';
import './UserForm.css';



export default function UserForm({ onUserCreated }: { onUserCreated: () => void }) {
    const [ageQuestion, setAgeQuestion] = useState<number>(0);
    const disabledEmail = ageQuestion !== 1;
    const [form] = Form.useForm();
    
    const handleOnFinish = (values: UserForm) => {
        const user: User = {
            email: values.email,
            balance: values.balance,
            dateOfBirth: values.dateOfBirth,
            gender: values.gender,
            continent: values.continent,
        };
        
        try {
            createUser(user);
            onUserCreated(); 
            form.resetFields();
            setAgeQuestion(0);

            Swal.fire({
                icon: 'success',
                title: 'User created',
                text: 'The user was added successfully.',
            });
        } catch (error) {
            console.error('Error creating user:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Could not create user.',
            });
        }
    };

    return (
        <div className="user-form-container">
            <Form layout="vertical" form={form} onFinish={handleOnFinish}>
                <Form.Item label="Are you +18 years old?" name="ageQuestion" rules={[{ required: true, message: 'Please select an option' }]}>
                    <Radio.Group
                        options={[
                            { label: 'Yes', value: 1 },
                            { label: 'No', value: 2 },
                        ]}
                        onChange={(e) => setAgeQuestion(e.target.value)}
                    />
                </Form.Item>
                <Form.Item required label="Email" name="email" rules={[{ required: true, message: 'Please enter your email', type: 'email' }, { required: disabledEmail, message: 'You must be +18 years old to enter your email' }]}>
                    <Input placeholder="Enter your email" disabled={disabledEmail} />
                </Form.Item>
                <Form.Item label="Balance" name="balance" rules={[{  type: 'number', min: 0, max: 999.99, message: 'Balance must be between 0 and 999.99' }]}>
                    <InputNumber 
                        placeholder="Enter your balance"
                        precision={2}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="Date of Birth" name="dateOfBirth" getValueFromEvent={(date) => date ? date.toDate() : undefined}>
                    <DatePicker placeholder="Select your date of birth" style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Gender" name="gender">
                    <Radio.Group
                        options={[
                            { label: 'Male', value: 'male' },
                            { label: 'Female', value: 'female' },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Continent" name="continent">
                    <Select
                        placeholder="Select your continent"
                        style={{ width: '100%' }}
                        options={[
                            { label: 'North America', value: 'northAmerica' },
                            { label: 'Europe', value: 'europe' },
                            { label: 'South America', value: 'southAmerica' },
                            { label: 'Asia', value: 'asia' },
                            { label: 'Oceania', value: 'oceania' },
                            { label: 'Antarctica', value: 'antarctica' },
                        ]}
                    />
                </Form.Item>
                <Button type="primary" htmlType="submit">Create User</Button>
            </Form>
        </div>
    )
}
