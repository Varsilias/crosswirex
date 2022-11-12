import React from "react";
import BaseCard from "../components/BaseCard";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../page.css";
import data from "../static/calculation-data.json";

const Calculations = () => {
  let handleLogout = () => {
    navigateTo("/login");
  };
  return (
    <div className="h-screen">
      <div className="relative bg-img bg-contain w-full flex flex-col justify-start items-start pt-9 px-8">
        <NavBar />
        <BaseCard>
          <table className="data-table">
            <thead className="text-[#615f5f] font-bold">
              <tr>
                <th scope="col">Signs</th>
                <th scope="col">Inputs</th>
                <th scope="col">Result</th>
                <th scope="col">Date Created</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.result}>
                  <td>{item.sign}</td>
                  <td>{item.operands.join(",")}</td>
                  <td>{item.result}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <button
                      type="button"
                      className="p-2 flex justify-center items-center text-white bg-[#4834D4] rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </BaseCard>
      </div>
    </div>
  );
};

export default Calculations;
