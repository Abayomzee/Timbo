import React from "react";
import { Bar } from "react-chartjs-2";

import Typography from "./../../../../common/Typography/Typography";
import ReportCard from "./../../../../common/ReportCard/ReportCard";
import Button from "../../../../common/Button/Button";

interface Props {}
const UserActivities: React.FC<Props> = () => {
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
  return (
    <>
      <section className="user-details__data">
        <ReportCard
          title="Call minutes"
          subTitle="Total time spent"
          statValue="10.345"
          progressBarType="ok"
          noBorder={true}
          cssClass="small"
        />
        <ReportCard
          title="Conference calls"
          subTitle="Total time spent"
          statValue="31.500"
          progressBarType="warn"
          noBorder={true}
          cssClass="small"
        />
        <ReportCard
          title="Call members"
          subTitle="Total call participants"
          statValue="248"
          progressBarType="danger"
          noBorder={true}
          cssClass="small"
        />
      </section>

      <section className="user-details__about">
        <section className="admin-dashboard__chart">
          <div className="flex-r-jcbetween-aicenter m-b-20px">
            <Typography type="h5" text="Timbo Activities" cssClass="head-25" />
            <div className="flex-r-aicenter">
              <Button
                cssClass="btn btn--primary btn--xxsmall btn-icon-n-text radius-6px"
                withIcon={true}
                iconClass="icon-upload m-r-10px"
                btnIcon="icon-upload"
                text="This Month"
              />
              <Button
                cssClass="btn btn--primary btn--xxsmall btn-icon-n-text radius-6px m-l-10px"
                withIcon={true}
                iconClass="icon-upload m-r-10px"
                btnIcon="icon-upload"
                text="Export"
              />
            </div>
          </div>
          <Bar data={data} options={options} type={"any"} />
        </section>
      </section>
    </>
  );
};

export default UserActivities;
