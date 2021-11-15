import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import Typography from "../Typography/Typography";
import Image from "./../Image/Image";
import Button from "./../Button/Button";
import Checkbox from "./../Input/Checkbox";

interface Props {}
const Table: React.FC<Props> = () => {
  const match = useRouteMatch("/admin");
  const path = match?.path;
  return (
    <table className="table">
      <thead>
        <tr className="table__head-row">
          <th className="table__th-first"></th>
          <th>Name</th>
          <th>Email address</th>
          <th>Phone</th>
          <th>Date joined</th>
          <th>PLAN</th>
          <th className="table__th-last"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user1" name="user1" cssClass="m-l-20px" />
          </td>
          <td>
            <div className="flex-r-aicenter">
              <div className="table__user">
                <Image source="pic18" cssClass="table__user-img" />
              </div>
              <Typography
                type="h6"
                text="Theresa Webb"
                cssClass="head-26 m-l-10px"
              />
            </div>
          </td>
          <td>
            <Typography type="p" text="bill.sanders@ex..." cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="(406) 555-0120" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="FREE" cssClass="p-14" />
          </td>
          <td>
            <Link to={`${path}/user-details/1`} className='link'>
              <Button
                cssClass="btn btn-4-table radius-5px table__cta"
                text="View User"
              />
            </Link>
          </td>
        </tr>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user2" name="user2" cssClass="m-l-20px" />
          </td>
          <td>
            <div className="flex-r-aicenter">
              <div className="table__user">
                <Image source="pic18" cssClass="table__user-img" />
              </div>
              <Typography
                type="h6"
                text="Theresa Webb"
                cssClass="head-26 m-l-10px"
              />
            </div>
          </td>
          <td>
            <Typography type="p" text="bill.sanders@ex..." cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="(406) 555-0120" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="FREE" cssClass="p-14" />
          </td>
          <td>
            <Link to={`${path}/user-details/1`} className='link'>
              <Button
                cssClass="btn btn-4-table radius-5px table__cta"
                text="View User"
              />
            </Link>
          </td>
        </tr>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user3" name="user3" cssClass="m-l-20px" />
          </td>
          <td>
            <div className="flex-r-aicenter">
              <div className="table__user">
                <Image source="pic18" cssClass="table__user-img" />
              </div>
              <Typography
                type="h6"
                text="Theresa Webb"
                cssClass="head-26 m-l-10px"
              />
            </div>
          </td>
          <td>
            <Typography type="p" text="bill.sanders@ex..." cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="(406) 555-0120" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="FREE" cssClass="p-14" />
          </td>
          <td>
            <Link to={`${path}/user-details/1`} className='link'>
              <Button
                cssClass="btn btn-4-table radius-5px table__cta"
                text="View User"
              />
            </Link>
          </td>
        </tr>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user4" name="user4" cssClass="m-l-20px" />
          </td>
          <td>
            <div className="flex-r-aicenter">
              <div className="table__user">
                <Image source="pic18" cssClass="table__user-img" />
              </div>
              <Typography
                type="h6"
                text="Theresa Webb"
                cssClass="head-26 m-l-10px"
              />
            </div>
          </td>
          <td>
            <Typography type="p" text="bill.sanders@ex..." cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="(406) 555-0120" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="FREE" cssClass="p-14" />
          </td>
          <td>
            <Link to={`${path}/user-details/1`} className='link'>
              <Button
                cssClass="btn btn-4-table radius-5px table__cta"
                text="View User"
              />
            </Link>
          </td>
        </tr>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user5" name="user5" cssClass="m-l-20px" />
          </td>
          <td>
            <div className="flex-r-aicenter">
              <div className="table__user">
                <Image source="pic18" cssClass="table__user-img" />
              </div>
              <Typography
                type="h6"
                text="Theresa Webb"
                cssClass="head-26 m-l-10px"
              />
            </div>
          </td>
          <td>
            <Typography type="p" text="bill.sanders@ex..." cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="(406) 555-0120" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="FREE" cssClass="p-14" />
          </td>
          <td>
            <Link to={`${path}/user-details/1`} className='link'>
              <Button
                cssClass="btn btn-4-table radius-5px table__cta"
                text="View User"
              />
            </Link>
          </td>
        </tr>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user6" name="user6" cssClass="m-l-20px" />
          </td>
          <td>
            <div className="flex-r-aicenter">
              <div className="table__user">
                <Image source="pic18" cssClass="table__user-img" />
              </div>
              <Typography
                type="h6"
                text="Theresa Webb"
                cssClass="head-26 m-l-10px"
              />
            </div>
          </td>
          <td>
            <Typography type="p" text="bill.sanders@ex..." cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="(406) 555-0120" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Typography type="p" text="FREE" cssClass="p-14" />
          </td>
          <td>
            <Link to={`${path}/user-details/1`} className='link'>
              <Button
                cssClass="btn btn-4-table radius-5px table__cta"
                text="View User"
              />
            </Link>
          </td>
        </tr>

        
      </tbody>
    </table>
  );
};

export default Table;
