"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const users = [
  {
    name: "Neil Smith",
    teleId: "neilSmith",
    status: "3 Months Plan",
    subs: true,
    exp: new Date().toDateString(),
  },
  {
    name: "John Smith",
    teleId: "JohnSmith",
    status: "Not Subscribe",
    subs: false,
    exp: "-",
  },
];
export default function userTable() {
  function nameBodyTemplate(rowData) {
    return (
      <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
        <img
          className="w-10 h-10 rounded-full"
          src={`https://ui-avatars.com/api/?name=${rowData.name}`}
          alt="Jese image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{rowData.name}</div>
          <div className="font-normal text-gray-500">{rowData.teleId}</div>
        </div>
      </div>
    );
  }
  function statusBodyTemplate(rowData) {
    if (rowData.subs)
      return (
        <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {rowData.status}
        </span>
      );
    return (
      <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
        {rowData.status}
      </span>
    );
  }
  return (
    <div className="border rounded-lg shadow p-2">
      <DataTable
        value={users}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          filter
          header="Name"
          style={{ width: "25%" }}
          body={nameBodyTemplate}
        ></Column>
        <Column
          body={statusBodyTemplate}
          filter
          field="status"
          header="Status"
          style={{ width: "25%" }}
        ></Column>
        <Column
          filter
          field="exp"
          header="Expired Plan Date"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
