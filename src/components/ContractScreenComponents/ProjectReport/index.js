import { Button, DatePicker, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
      console.log("ooooo", values);
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const ProjectReport = ({ isEdit, setIsEdit }) => {
  const [dataSource, setDataSource] = useState([
    {
      shipmentNo: "1",
      deliveryDate: "15-Feb-24",
      weight: "500,00",
      plannedRevenue: "200.588,24",
      paymentMilestone: "Advance Payment",
      paymentPercentage: "5%",
      paymentAmount: "10.000",
      paymentDuration: "30",
      paymentDate: "75.000",
      paymentMethod: "30",
      key: "0",
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const defaultColumns = [
    {
      title: "Shipment No",
      dataIndex: "shipmentNo",
      editable: isEdit,
      fixed: "left",
    },
    {
      title: "Delivery Date",
      dataIndex: "deliveryDate",
      render: (text, record) => {
        return (
          <div>
            <DatePicker onChange={onChange} />
          </div>
        );
      },
    },
    {
      title: "Weight",
      dataIndex: "weight",
      editable: isEdit,
    },
    {
      title: "Planned Revenue",
      dataIndex: "plannedRevenue",
      editable: isEdit,
    },
    {
      title: "Payment Milestone",
      dataIndex: "paymentMilestone",
      editable: isEdit,
    },
    {
      title: "Payment (%)",
      dataIndex: "paymentPercentage",
      editable: isEdit,
    },
    {
      title: "Payment Amount",
      dataIndex: "paymentAmount",
      editable: isEdit,
    },

    {
      title: "Payment Duration",
      dataIndex: "paymentDuration",
      editable: isEdit,
    },

    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      render: (text, record) => {
        return (
          <div>
            <DatePicker onChange={onChange} />
          </div>
        );
      },
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      editable: isEdit,
    },
    {
      title: "",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
      fixed: "right",
    },
  ];
  const handleAdd = () => {
    const newData = {
      shipmentNo: count,
      deliveryDate: "",
      weight: "",
      plannedRevenue: "",
      paymentMilestone: "",
      paymentPercentage: "",
      paymentAmount: "",
      paymentDuration: "",
      paymentDate: "",
      paymentMethod: "",
      key: count,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  console.log("dataSource", dataSource);

  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
        scroll={{
          x: 1800,
        }}
      />
    </div>
  );
};

export default ProjectReport;
