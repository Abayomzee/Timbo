import React from "react";
import Typography from "../Typography/Typography";
import Button from "./../Button/Button";
import Checkbox from "./../Input/Checkbox";

interface Props {}
const SupportTable: React.FC<Props> = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table__head-row">
          <th className="table__th-first"></th>
          <th>Ticket number</th>
          <th>ticket title</th>
          <th>sender</th>
          <th>Date</th>
          <th className="table__th-last"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="table__body-row">
          <td>
            <Checkbox label="user1" name="user1" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>

        <tr className="table__body-row">
          <td>
            <Checkbox label="user2" name="user2" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>

        <tr className="table__body-row">
          <td>
            <Checkbox label="user3" name="user3" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>

        <tr className="table__body-row">
          <td>
            <Checkbox label="user4" name="user4" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>

        <tr className="table__body-row">
          <td>
            <Checkbox label="user5" name="user5" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>

        <tr className="table__body-row">
          <td>
            <Checkbox label="user6" name="user6" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>

        <tr className="table__body-row">
          <td>
            <Checkbox label="user7" name="user7" cssClass="m-l-20px" />
          </td>
          <td>
            <Typography type="h6" text="5236850" cssClass="head-26" />
          </td>
          <td>
            <Typography type="p" text="48 Hours" cssClass="p-14" />
          </td>

          <td>
            <Typography
              type="p"
              text="curtis.weaver@example.com"
              cssClass="p-14"
            />
          </td>
          <td>
            <Typography type="p" text="Feb 15, 2020" cssClass="p-14" />
          </td>
          <td>
            <Button
              cssClass="btn btn-4-table radius-5px table__cta"
              text="View User"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SupportTable;
