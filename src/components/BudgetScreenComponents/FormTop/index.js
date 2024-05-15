import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import dayjs from "dayjs";
import { useAddNewBudgetMutation } from "features/budget/budgetSlice";
import { useLocation } from "react-router-dom";
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

const onChange = (date, dateString) => {
  console.log(date, dateString);
};



const FormTop = ({ isEdit }) => {
  const [form] = Form.useForm();

  const [addNewBudget] = useAddNewBudgetMutation();
  const location = useLocation();



  const onFinish = (values) => {
    console.log({
      project_id: location.search.slice(12, location.search.length),
      ...values,
      budget_date: values.budget_date.map(function (item) {
        return {
          ...item,
          date: dayjs(item.date).format("YYYY-MM-DD"),
        };
      }),
    });

    addNewBudget({
      project_id: location.search.slice(12, location.search.length),
      ...values,
      budget_date: values.budget_date.map(function (item) {
        return {
          ...item,
          date: dayjs(item.date).format("YYYY-MM-DD"),
        };
      }),
    })
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        initialValues={
          isEdit
            ? {
                project_no: "123",
                project_name: "Project Name",
                client: "Client",
                contract_amount: "1000000",
              }
            : {}
        }
        labelAlign="left"
        onFinish={onFinish}
        validateMessages={validateMessages}
        disabled={!isEdit}
      >
        <div className="flex justify-end">
          <Form.Item className="flex mr-2">
            <Button htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
          <Button onClick={() => form.resetFields()}>Huỷ</Button>
        </div>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="project_no" label="Project No">
              <Input style={{width: '400px'}}/>
            </Form.Item>
            <Form.Item name="project_name" label="Project Name">
              <Input style={{width: '400px'}}/>
            </Form.Item>

            <Form.Item name="client" label="Client">
              <Input style={{width: '400px'}}/>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="contract_amount" label="Contract Amount">
              <Input addonAfter={suffixSelectorContractAmount} style={{width: '400px'}}/>
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
                    name={[name, "budget"]}
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

export default FormTop;
