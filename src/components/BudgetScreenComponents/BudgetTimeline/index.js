import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
const onFinish = (values) => {
  console.log("Received values of form:", values);
};

const BudgetTimeline = () => {
  return (
    <div>
      <div className="my-16 text-[24px]">Budget Timeline</div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
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
                    <Input placeholder="Ngày" />
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
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default BudgetTimeline;
