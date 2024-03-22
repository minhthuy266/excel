import { Col, Form, Input, Row } from "antd";
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

const onFinish = (values) => {
  console.log(values);
};

const FormTop = ({ isEdit }) => {
  return (
    <Form
      {...layout}
      name="nest-messages"
      labelAlign="left"
      onFinish={onFinish}
      validateMessages={validateMessages}
      disabled={!isEdit}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name={["user", "projectNo"]}
            label="Project No"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "projectName"]} label="Project Name">
            <Input />
          </Form.Item>

          <Form.Item name={["user", "client"]} label="Client">
            <Input />
          </Form.Item>

          <Form.Item name={["user", "contractAmount"]} label="Contract Amount">
            <Input />
          </Form.Item>

          <Form.Item name={["user", "totalWeight"]} label="Total Weight">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "unitPrice"]} label="Unit Price">
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name={["user", "deliveryTerm"]} label="Delivery term">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "contractDate"]} label="Contract Date">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormTop;
