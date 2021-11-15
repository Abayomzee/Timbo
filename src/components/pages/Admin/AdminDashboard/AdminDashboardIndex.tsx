import React from "react";
import { Bar } from "react-chartjs-2";

// import AdminSideNav from "./../../../common/Admin/AdminSideNav";
import Typography from "./../../../common/Typography/Typography";
import UserIcon from "./../../../common/UserIcon/UserIcon";
import Button from "./../../../common/Button/Button";
import TextWithDivider from "./../../../common/TextWithDivider/TextWithDivider";
import Svg from "./../../../common/Svg/Svg";
import UserContact from "./../../../common/Contact/UserContact";
import Image from "./../../../common/Image/Image";
import SearchInput from "./../../../common/SearchInput/SearchInput";
import FilterInput from "./../../../common/FilterInput/FilterInput";

interface Props {}
const AdminDashboardIndex: React.FC<Props> = () => {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Conference calls",
        data: [12, 19, 3, 5, 2, 3, 3],
        backgroundColor: "#7895FF",
      },
      {
        label: "Calls",
        data: [2, 3, 20, 5, 1, 4, 2],
        backgroundColor: "#FF92AE",
      },
      {
        label: "Chats",
        data: [3, 10, 13, 15, 22, 30, 6],
        backgroundColor: "#FFD18B",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  const adminSubHeadingsWithIcon = [
    {
      iconName: "icon-location",
      divider: "splash",
      data: "Hamsterdam, Germany",
    },
    {
      iconName: "icon-solid-time",
      divider: "splash",
      data: "Tues, 10th May",
    },
  ];
  return (
    <section className="admin-layout__content">
      <nav className="admin-layout__top-nav">
        <Typography text="Dashboard" type="h5" cssClass="head-21" />
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
              text="Good afternoon, Jenny"
              cssClass="head-22 m-b-15px"
            />
            <TextWithDivider texts={adminSubHeadingsWithIcon} />
          </article>
          <div className="support-tickect-card">
            <Svg iconId="icon-circle" cssClass="icon-circle" />
            <div className="m-l-20px">
              <Typography
                type="h5"
                text="You have (2) support tickets"
                cssClass="head-23 m-b-2px"
              />
              <Typography type="p" text="view tickets" cssClass="p-11" />
            </div>
          </div>
        </section>

        <section className="admin-dashboard__stats">
          <aside className="admin-dashboard__stats-details">
            <section className="admin-dashboard__stats-cards">
              <div className="admin-dashboard__stats-card">
                <div className="flex-r-jcbetween-aicenter">
                  <Image source="pic26" />
                  <FilterInput cssClass="type-1" />
                </div>
                <div className="m-t-30px">
                  <Typography
                    type="p"
                    text="All Registered Users"
                    cssClass="p-12 m-b-5px"
                  />
                  <Typography type="span" text="" cssClass="">
                    <Typography type="span" text="13,205" cssClass="head-24" />
                    <Typography
                      type="span"
                      text="+23"
                      cssClass="p-13 m-l-5px"
                    />
                  </Typography>
                </div>
              </div>
              <div className="admin-dashboard__stats-card">
                <div className="flex-r-jcbetween-aicenter">
                  <Image source="pic27" />
                  <FilterInput cssClass="type-1" />
                </div>

                <div className="m-t-30px">
                  <Typography
                    type="p"
                    text="Pro Users"
                    cssClass="p-12 m-b-5px"
                  />
                  <Typography type="span" text="" cssClass="">
                    <Typography type="span" text="13,205" cssClass="head-24" />
                    <Typography
                      type="span"
                      text="+23"
                      cssClass="p-13 m-l-5px"
                    />
                  </Typography>
                </div>
              </div>
              <div className="admin-dashboard__stats-card">
                <div className="flex-r-jcbetween-aicenter">
                  <Image source="pic28" />
                  <FilterInput cssClass="type-1" />
                </div>

                <div className="m-t-30px">
                  <Typography
                    type="p"
                    text="Daily user"
                    cssClass="p-12 m-b-5px"
                  />
                  <Typography type="span" text="" cssClass="">
                    <Typography type="span" text="13,205" cssClass="head-24" />
                    <Typography
                      type="span"
                      text="+23"
                      cssClass="p-13 m-l-5px"
                    />
                  </Typography>
                </div>
              </div>
            </section>
            <section className="admin-dashboard__chart">
              <div className="flex-r-jcbetween-aicenter m-b-20px">
                <Typography
                  type="h5"
                  text="Timbo Activities"
                  cssClass="head-25"
                />
                <Button
                  cssClass="btn btn--primary btn--xxsmall btn-icon-n-text radius-6px"
                  withIcon={true}
                  iconClass="icon-upload m-r-10px"
                  btnIcon="icon-upload"
                  text="Export"
                />
              </div>
              <Bar data={data} options={options} type={"any"} />
            </section>
         
          </aside>
          <aside className="admin-dashboard__stats-aside">
            <aside className="admin-dashboard__stats-right">
              <Typography type="h4" text="Recent Users" cssClass="head-6" />
              <Typography
                type="p"
                text="Your previous chats and calls"
                cssClass="p-3"
              />
              <div className="admin-dashboard__stats__recent-users">
                <UserContact
                  noCall={false}
                  iconSize="small"
                  actionBtnSize="small"
                  userImg="pic23"
                />
                <UserContact
                  noCall={false}
                  iconSize="small"
                  actionBtnSize="small"
                  userImg="pic18"
                />
                <UserContact
                  noCall={false}
                  iconSize="small"
                  actionBtnSize="small"
                  userImg="pic19"
                />
                <UserContact
                  noCall={false}
                  iconSize="small"
                  actionBtnSize="small"
                  userImg="pic20"
                />
                <UserContact
                  noCall={false}
                  iconSize="small"
                  actionBtnSize="small"
                  userImg="pic21"
                />
                <UserContact
                  noCall={false}
                  iconSize="small"
                  actionBtnSize="small"
                  userImg="pic22"
                />
              </div>
              <Typography
                type="p"
                text="View All"
                cssClass="p-3 text-center pointer"
              />
            </aside>
          </aside>
        </section>
      </section>
    </section>
  );
};

export default AdminDashboardIndex;
