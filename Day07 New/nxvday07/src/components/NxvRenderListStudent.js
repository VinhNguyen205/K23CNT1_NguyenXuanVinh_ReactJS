import React, { Component } from 'react';

export default class NxvRenderListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NxvStudents: [
        {
          NxvID: "S001",
          NxvName: "Nguyễn Xuân Vinh",
          NxvAge: 20,
          NxvClass: "K23CNT1",
        },
        {
          NxvID: "S002",
          NxvName: "Nguyễn Quang A",
          NxvAge: 20,
          NxvClass: "K23CNT1",
        },
        {
          NxvID: "S003",
          NxvName: "Nguyễn Quang B",
          NxvAge: 20,
          NxvClass: "K23CNT1",
        },
        {
          NxvID: "S004",
          NxvName: "Nguyễn Quang C",
          NxvAge: 20,
          NxvClass: "K23CNT1",
        },
      ],
    };
  }

  render() {
    const NxvElements = this.state.NxvStudents.map((NxvItem, index) => {
      return (
        <tr key={NxvItem.NxvID}>
          <td>{index + 1}</td>
          <td>{NxvItem.NxvID}</td>
          <td>{NxvItem.NxvName}</td>
          <td>{NxvItem.NxvAge}</td>
          <td>{NxvItem.NxvClass}</td>
          <td>
            <button className='btn btn-primary mx-2'>Sửa</button>
            <button className='btn btn-danger'>Xóa</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <table className='table border border-1 table-bordered'>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Lớp</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>{NxvElements}</tbody>
        </table>
      </div>
    );
  }
}