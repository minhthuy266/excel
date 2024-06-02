import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import dayjs from "dayjs";
import { useAddNewBudgetMutation } from "features/budget/budgetSlice";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    // wrapperCol: {
    //   span: 12,
    // },
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
    <Form.Item disabled={true} name="suffix" noStyle>
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

const onChange = (date, dateString) => {
    console.log(date, dateString);
};



const FormCreate = ({ dataTable, project, setMessage, setDataTable }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [addNewBudget] = useAddNewBudgetMutation();
    console.log('datatable 1', dataTable)
    useEffect(() => {
        form.setFieldsValue({
            project_no: project?.project_no,
            project_name: project?.project_name,
            client: project?.client,
            contract_amount: project?.amount,
            budget_date: project?.budget_date?.map(function (item) {
                return {
                    date: dayjs(item.date),
                    item: item.item,
                    amount: item.amount,
                };
            }) || [],
        }) ;

    }, [form]);
    const onFinish = (values) => {
        const newBudget = {
            project_id: project.id,
            data: dataTable,
            budget_date: values?.budget_date?.map(function (item) {
                return {
                    ...item,
                    date: dayjs(item.date).format("YYYY-MM-DD"),
                };
            }) || [],
        }
        console.log(values)
        addNewBudget(newBudget).then(res => {
            if(res?.data.status) {
                navigate(`/dash/budget-list?project_no=${project.id}`)
            }
        })
    };

    return (
        <>
            <Form
                {...layout}
                form={form}
                name="nest-messages"
                labelAlign="left"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <div className="flex justify-end">
                    <Form.Item className="flex mr-2">
                        <Button htmlType="submit">
                            Lưu
                        </Button>
                    </Form.Item>
                    <Button onClick={() => {
                        form.resetFields()
                        setDataTable([])
                    }}>Huỷ</Button>
                </div>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item name="project_no" label="Project No">
                            <Input disabled={true} style={{width: '400px'}}/>
                        </Form.Item>
                        <Form.Item name="project_name" label="Project Name">
                            <Input disabled={true} style={{width: '400px'}}/>
                        </Form.Item>

                        <Form.Item name="client" label="Client">
                            <Input disabled={true} style={{width: '400px'}}/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item name="contract_amount" label="Contract Amount">
                            <Input disabled={true} addonAfter={suffixSelectorContractAmount} style={{width: '400px'}}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>

                </Row>

                <div className="my-16 text-[24px]">Budget Timeline</div>

                <Form.List name="budget_date">
                    {(fields, { add, remove }) => (
                        <>
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>
                            </Form.Item>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: "flex",
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, "date"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập ngày",
                                            },
                                        ]}
                                    >
                                        <DatePicker onChange={onChange} width='200%' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "item"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập tên item",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Item" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "amount"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập số tiền",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Budget" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}

                        </>
                    )}
                </Form.List>
                {/* </Form> */}
            </Form>
        </>
    );
};

export default FormCreate;
