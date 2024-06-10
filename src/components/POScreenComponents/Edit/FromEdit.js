import { Col, DatePicker, Form, Input, Row, Button, Select } from "antd";
import { useUpdatePoMutation } from "features/po/poSlice";
import moment from "moment";
import React, { useState } from 'react'
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

const FormEdit = ({ isEdit, po, dataSource, setMessage}) => {
  const [updatePo] = useUpdatePoMutation();
  const onFinish = (values) => {
    values.project_id = po.project_id;
    values.id = po.id;
    values.date = moment(values.date).format("YYYY-MM-DD")
    values.data = dataSource;
    updatePo(values).then(res => {
      if(res?.data.status) {
        console.log(res.data)
        setMessage(res.data.message)
      }
    })
    
  };

  const [datePo, setDate] = useState(po?.date);

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
        disabled={!isEdit}
        initialValues={{
          ...po,
          date: dayjs(datePo, "YYYY-MM-DD"),
          project_no: po?.project.project_no
        }}
      >

       <div className="flex justify-end fixed right-10 z-10 top-20">
          <Form.Item className="flex mr-2">
            <Button htmlType="submit">Cập nhật</Button>
          </Form.Item>
        </div>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="project_no" label="Project No">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item name="po_no" label="PO No">
              <Input />
            </Form.Item>
            <Form.Item name="rev" label="Rev">
              <Input />
            </Form.Item>
            {/*<Form.Item*/}
            {/*  name="poAmountExlTax"*/}
            {/*  label="PO Amount (Excl TAX)"*/}
            {/*>*/}
            {/*  <Input />*/}
            {/*</Form.Item>*/}

            {/*<Form.Item*/}
            {/*  name="poAmountInclTax"*/}
            {/*  label="PO Amount (Incl TAX)"*/}
            {/*>*/}
            {/*  <Input />*/}
            {/*</Form.Item>*/}
          </Col>

          <Col span={12}>
            <Form.Item name="supplier" label="Supplier/Subcon">
              <Input />
            </Form.Item>

            <Form.Item name="incharge" label="Div Incharge">
              <Input />
            </Form.Item>

            <Form.Item name="date" label="PO Date">
              <DatePicker onChange={onChange} />
            </Form.Item>


          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormEdit;
