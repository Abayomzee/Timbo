import React from "react";
// import { Bar } from "react-chartjs-2";

// import AdminSideNav from "./../../../common/Admin/AdminSideNav";
import Typography from "./../../../common/Typography/Typography";
import UserIcon from "./../../../common/UserIcon/UserIcon";
import Button from "./../../../common/Button/Button";
import TextWithDivider from "./../../../common/TextWithDivider/TextWithDivider";
// import Svg from "./../../../common/Svg/Svg";
// import UserContact from "./../../../common/Contact/UserContact";
// import Image from "./../../../common/Image/Image";
import SearchInput from "./../../../common/SearchInput/SearchInput";
import FilterInput from "./../../../common/FilterInput/FilterInput";
import Table from "../../../common/Table/Table";

interface Props {}
const Users: React.FC<Props> = () => {
  const adminSubHeadingsWithIcon = [
    {
      iconName: "icon-info-circle",
      divider: "splash",
      data: "Monitor and manage user statistics",
    },
  ];
  return (
    <section className="admin-layout__content">
      <nav className="admin-layout__top-nav">
        <Typography text="Users" type="h5" cssClass="head-21" />
        <div className="admin-layout__top-nav__actions">
          <SearchInput />
          <Button
            cssClass="btn btn-icon admin-layout__btn"
            icon="icon-notification"
            iconClass="icon-notification"
          />
          <UserIcon pic="pic25" cssClass="admin-layout__user-icon" />
        </div>
      </nav>
      <section className="admin-layout__section">
        <section className="flex-r-jcbetween-aicenter m-b-20px">
          <article>
            <Typography
              type="h3"
              text="User Management"
              cssClass="head-22 m-b-15px"
            />
            <TextWithDivider texts={adminSubHeadingsWithIcon} />
          </article>
        </section>
        <section className="flex-r-aicenter m-t-40px m-b-20px">
          <FilterInput cssClass="type-2" />
          <FilterInput cssClass="type-2 m-l-auto" />
          <Button
            cssClass="btn btn--primary btn--xxsmall btn-icon-n-text m-l-10px radius-7px"
            withIcon={true}
            iconClass="icon-upload m-r-10px"
            btnIcon="icon-upload"
            text="Export"
          />
        </section>

        <section>
          <div className="table-wrapper ">
            <Table />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Users;
