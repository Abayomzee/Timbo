import React from "react";
import TopNav from "./../../common/StaticPages/TopNav";
import IndexHeader from "./../../common/StaticPages/IndexHeader";
import Image from "./../../common/Image/Image";
import Typography from "../../common/Typography/Typography";
import Svg from "./../../common/Svg/Svg";
import Button from "../../common/Button/Button";
import Footer from "./../../common/StaticPages/Footer";
import { Link } from "react-router-dom";

interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <>
      <TopNav />
      <IndexHeader />
      <section className="section__connecting-teams">
        <section className="center">
          <Image
            source="pic31"
            cssClass="teams-img"
            maxHeight="61.1rem"
            maxWidth="97.9rem"
          />
          <div className="close-top-gap">
            <Image source="pic32" cssClass="center-item m-b-40px" />
            <Typography
              type="h3"
              text="Conferencing that’s reimagined"
              cssClass="head-28 text-center m-b-20px"
            />
            <Typography
              type="p"
              text="Our ratings speak for us. Connect with teams, friends and family in a simpler, trustier way."
              cssClass=" p-19 index-page__sub-heading text-center"
            />

            <section className="section__features m-t-120px">
              <div className="feature-img-holder m-t-100px">
                <Image source="pic33" cssClass="image-fit" />
              </div>
              <div>
                <Typography
                  type="h4"
                  text="Some simple features"
                  cssClass="head-29 m-b-15px"
                />
                <Typography
                  type="p"
                  text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                  cssClass="p-20 m-b-60px"
                />
                <div className="flex-r m-b-40px">
                  <div>
                    <Image source="pic42" />
                  </div>
                  <div className="m-l-20px">
                    <Typography
                      type="h4"
                      text="Some simple features"
                      cssClass="head-30 m-b-15px"
                    />
                    <Typography
                      type="p"
                      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                      cssClass=" p-20"
                    />
                  </div>
                </div>

                <div className="flex-r m-b-40px">
                  <div>
                    <Image source="pic43" />
                  </div>
                  <div className="m-l-20px">
                    <Typography
                      type="h4"
                      text="Serverless secured connections"
                      cssClass="head-30 m-b-15px"
                    />
                    <Typography
                      type="p"
                      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                      cssClass=" p-20"
                    />
                  </div>
                </div>
                <div className="flex-r m-b-40px">
                  <div>
                    <Image source="pic44" />
                  </div>
                  <div className="m-l-20px">
                    <Typography
                      type="h4"
                      text="Keep track of your statistics "
                      cssClass="head-30 m-b-15px"
                    />
                    <Typography
                      type="p"
                      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                      cssClass=" p-20"
                    />
                  </div>
                </div>
                <div className="flex-r ">
                  <div>
                    <Image source="pic45" />
                  </div>
                  <div className="m-l-20px">
                    <Typography
                      type="h4"
                      text="Schedule up to 30 meetings "
                      cssClass="head-30 m-b-15px"
                    />
                    <Typography
                      type="p"
                      text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                      cssClass=" p-20"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
      <section className="section__clientele">
        <Typography
          type="h3"
          text="Timbo works with"
          cssClass="head-29 text-center m-b-50px"
        />
        <div className="timbo-partners">
          <Image source="pic34" />
          <Image source="pic35" />
          <Image source="pic36" />
          <Image source="pic37" />
          <Image source="pic38" />
          <Image source="pic39" />
        </div>

        <Typography
          type="h3"
          text="Our variety of affordable plans"
          cssClass="head-31 text-center m-t-200px m-b-10px"
        />
        <Typography
          type="p"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
          cssClass="p-19 text-center plans-sub-heading m-b-100px"
        />
        <section className="center timbo-plans">
          <div className="timbo-plan">
            <Typography type="h3" text="Free" cssClass="head-32 m-b-10px" />
            <Typography
              type="h3"
              text="Basic/One-off"
              cssClass="head-33 m-b-10px"
            />
            <Typography
              type="p"
              text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              cssClass="p-21 m-b-40px"
            />

            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Host up to 100 participants"
                cssClass="p-22 m-l-10px"
              />
            </div>
            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Group meetings for up to 40 minutes"
                cssClass="p-22 m-l-10px"
              />
            </div>
            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Unlimited one-on-one Meetings"
                cssClass="p-22 m-l-10px"
              />
            </div>

            <Button
              text="Sign up to get started"
              cssClass="btn btn--primary btn--xsmall radius-20px m-t-20px"
            />
          </div>

          <div className="timbo-plan">
            <Typography type="h3" text="Silver" cssClass="head-32 m-b-10px" />
            <Typography
              type="h3"
              text="$52/month"
              cssClass="head-33 m-b-10px"
            />
            <Typography
              type="p"
              text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              cssClass="p-21 m-b-40px"
            />

            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Group meetings for up to 30 hours"
                cssClass="p-22 m-l-10px"
              />
            </div>
            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Social Media Streaming"
                cssClass="p-22 m-l-10px"
              />
            </div>
            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="1 GB Cloud Recording (per license)"
                cssClass="p-22 m-l-10px"
              />
            </div>

            <Button
              text="Sign up to get started"
              cssClass="btn btn--primary btn--xsmall radius-20px m-t-20px"
            />
          </div>

          <div className="timbo-plan">
            <Typography
              type="h3"
              text="$72/month"
              cssClass="head-32 m-b-10px"
            />
            <Typography type="h3" text="Gold" cssClass="head-33 m-b-10px" />
            <Typography
              type="p"
              text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
              cssClass="p-21 m-b-40px"
            />

            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Host up to 300 participants"
                cssClass="p-22 m-l-10px"
              />
            </div>
            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="Recording Transcripts"
                cssClass="p-22 m-l-10px"
              />
            </div>
            <div className="flex-r-aicenter m-b-20px">
              <Svg iconId="icon-plan-check" cssClass="icon-plan-check" />
              <Typography
                type="p"
                text="All features included in Pro and more"
                cssClass="p-22 m-l-10px"
              />
            </div>

            <Button
              text="Sign up to get started"
              cssClass="btn btn--primary btn--xsmall radius-20px m-t-20px"
            />
          </div>
        </section>
      </section>
      <section className="bg-deep-blue p-y-80px"></section>
      <section className="section__samples">
        <Typography
          type="h3"
          text="A mobile feature headline"
          cssClass="head-31 text-center m-b-10px"
        />
        <Typography
          type="p"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          cssClass="p-19 text-center plans-sub-heading"
        />
        <div className="flex-r-jccenter-aicenter m-t-40px">
          <Image source="pic40" cssClass="m-r-10px" />
          <Image source="pic41" />
        </div>
      </section>

      <section className="section__get-notified">
        <div className="center">
          <Typography
            type="h3"
            text="Something awesome is coming"
            cssClass="head-31 text-center m-b-10px"
          />
          <Typography
            type="p"
            text="Register to get notified about major updates on Timbo and release date"
            cssClass="p-19 text-center plans-sub-heading"
          />

          <Link
            to={{
              pathname:
                "https://forms.office.com/Pages/ResponsePage.aspx?id=8HuagVAqSkGAYojeZZxhfbub6j2hU-JHuVxqt1NGDkdUNjAxMU4wRlJQS1NHUFo1T1JZRVc3SDFLVy4u",
            }}
            target="_blank"
            className="link"
          >
            <Button
              cssClass="btn btn--primary btn--small radius-20px notification-btn"
              text="Register here"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
