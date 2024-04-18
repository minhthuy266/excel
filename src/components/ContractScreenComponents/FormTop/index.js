import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useState } from "react";
import moment from "moment";
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

const suffixSelectorTotalWeight = (
  <Form.Item name="suffixSelectorTotalWeight" noStyle>
    <Select
      style={{
        width: 100,
      }}
      defaultValue="Ton"
    >
      <Option value="Ton">Ton</Option>
      <Option value="Kg">Kg</Option>
    </Select>
  </Form.Item>
);

// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };



const FormTop = ({ isEdit, contract }) => {
  console.log("first contract", contract);

  const [formData, setFormData] = useState({
    ...contract,
    contract_date: moment('2023-12-31'), 

  });
  
  const onChange = (date, dateString) => {
    setFormData({
      ...formData,
      contract_date: moment(date),
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      labelAlign="left"
      initialValues={formData}
      onFinish={onFinish}
      validateMessages={validateMessages}
      disabled={!isEdit}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="project_no" label="Project No">
            <Input />
          </Form.Item>
          <Form.Item name="project_name" label="Project Name">
            <Input />
          </Form.Item>

          <Form.Item name="client" label="Client">
            <Input />
          </Form.Item>

          <Form.Item name="amount" label="Contract Amount">
            <Input addonAfter={suffixSelectorContractAmount} />
          </Form.Item>

          <Form.Item name="weight" label="Total Weight">
            <Input addonAfter={suffixSelectorTotalWeight} />
          </Form.Item>
          <Form.Item name="unit_price" label="Unit Price">
            <Input addonAfter={suffixSelectorTotalWeight} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="delivery_term" label="Delivery term">
            <Input />
          </Form.Item>
          <Form.Item name="contract_date" label="Contract Date">
            <DatePicker onChange={onChange}/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormTop;
