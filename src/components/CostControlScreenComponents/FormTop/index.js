import { Col, DatePicker, Form, Input, Row, Button, Select } from "antd";
import {useUpdateCostControlMutation} from "features/costControl/costControlSlice";
import moment from "moment";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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


const FormCreate = ({ dataSourceParent, costControl, setMessage, listPo }) => {
  const navigate = useNavigate();
  const [updateCostControl] = useUpdateCostControlMutation();
  const [date, setDate] = useState();
  const [purchasedId, setPurchasedId] = useState(costControl.purchased.id);
  const [errorPurchasedId, setErrorPurchasedId] = useState();
  const data = {
    project_no: costControl.project.project_no
  }

  const onFinish = (values) => {
    values.project_id = costControl.project.id;
    values.purchased_id = purchasedId;

    values.date = moment(date).format("YYYY-MM-DD")
    values.data = dataSourceParent;

    if (!purchasedId) {
      setErrorPurchasedId('Vui lòng chọn purchased id')
      return false
    }

    updateCostControl(values).then(res => {

      if(res?.data.status) {
        setMessage(res?.data.message)
      }
    })
  };

  const poOption = listPo?.data.map(item => {
    return {
      value: item.id,
      label: item.po_no
    }
  })
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
                defaultValue={costControl.purchased.po_no}
                onChange={(value) => {
                  setPurchasedId(value)
                }}
                options={poOption}
              />
              {
                errorPurchasedId
                  ? (<div style={{color: "red"}}>{errorPurchasedId}</div>) : null
              }

            </Form.Item>

          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormCreate;
