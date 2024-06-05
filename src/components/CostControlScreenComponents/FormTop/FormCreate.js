import { Col, DatePicker, Form, Input, Row, Button, Select } from "antd";
import { useAddNewPoMutation, useGetPoByIdQuery, useUpdatePoMutation } from "features/po/poSlice";
import { random } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams, useParams } from 'react-router-dom';
import dayjs from "dayjs";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 12,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};
/* eslint-enable no-template-curly-in-string */
const { Option } = Select;
const suffixSelectorContractAmount = (
    <Form.Item name="suffix" noStyle>
        <Select
            style={{
                width: 100,
            }}
            defaultValue="VND"
        >
            <Option value="USD">USD</Option>
            <Option value="VND">VND</Option>
        </Select>
    </Form.Item>
);


const FormCreate = ({ idProject, dataSourceParent, contract, setMessage }) => {
    const navigate = useNavigate();
    const [addNewPo] = useAddNewPoMutation();
    const [date, setDate] = useState();
    const data = {
        project_no: contract.project_no
    }
    const onFinish = (values) => {
        values.project_id = idProject;
        values.date = moment(date).format("YYYY-MM-DD")
        values.data = dataSourceParent;

        addNewPo(values).then(res => {
            if(res?.data.status) {
                setMessage(res?.data.message)
            }
        })
    };

    const onChange = (date, dateString) => {
        setDate(dateString)
    };

    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                labelAlign="left"
                onFinish={onFinish}
                validateMessages={validateMessages}
                initialValues={{
                    ...data
                }}
            >
                <div className="flex justify-end">
                    <Form.Item className="flex mr-2">
                        <Button htmlType="submit">Lưu</Button>
                    </Form.Item>
                </div>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item name="project_no" label="Project No">
                            <Input disabled={true} />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item name="purchased_id" label="Purchased Order">
                            <Select
                                defaultValue="lucy"
                                onChange={()=>{}}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default FormCreate;
