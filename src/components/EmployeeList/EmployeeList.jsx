import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Lock } from 'react-feather';

import deleteIcon from '../../icon/delete.png';
import { mouseEnter, mouseLeave, removeEmployee } from '../../actions';

const EmployeeList = ({ empId, empProfileImg, empName, empEmail }) => {
  const dispatch = useDispatch();
  const [isEmpActive, setIsEmpActive] = useState(true);
  //set employee status active/inactive
  const handleOptionChange = (event) => {
    const status = event.target.value;
    status === 'active' ? setIsEmpActive(true) : setIsEmpActive(false);
  };
  return (
    <tr>
      <td
        className="d-flex"
        onMouseEnter={() =>
          dispatch(mouseEnter(empProfileImg, empName, empEmail, isEmpActive))
        }
        onMouseLeave={() => dispatch(mouseLeave())}
      >
        <span className="me-3">
          <img
            className="profile-img"
            src={empProfileImg}
            alt="owner-profile"
          />
        </span>
        <span>
          <div className="emp-name">{empName}</div>
          <div className="emp-mail">{empEmail}</div>
        </span>
      </td>
      {empId === 1 ? (
        <>
          <td className="owner-status">Active</td>
          <td className="owner-access">Owner</td>
          <td>
            <Lock
              className="profile-icon m-0"
              onClick={() => alert('You Dont Have Access to Remove Owner')}
            />
          </td>
        </>
      ) : (
        <>
          <td className="emp-status">
            <select onChange={handleOptionChange}>
              <option value="active" defaultValue>
                Active
              </option>
              <option value="inactive">Inactive</option>
            </select>
          </td>
          <td className="emp-access">
            <select>
              <option value="manager" defaultValue>
                Manager
              </option>
              <option value="read">Read</option>
            </select>
          </td>
          <td>
            <img
              src={deleteIcon}
              className="profile-icon m-0"
              alt="delete-icon"
              onClick={() => dispatch(removeEmployee(empId))}
            />
          </td>
        </>
      )}
    </tr>
  );
};

export default EmployeeList;
