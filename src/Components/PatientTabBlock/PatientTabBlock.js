import React, { useEffect } from "react";
import "./PatientTabBlock.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import { choiceQuittingList, choicePresentList } from "../../Actions";
import Table from "../Table/Table";
import Services from "../../Services/fetch";
function PatientTabBlock(props) {
  const services = new Services();

  useEffect(() => {
    services.getMedList("presentList").then(list => {
      props.choicePresentList(list);
    });
    services.getMedList("quittingList").then(list => {
      props.choiceQuittingList(list);
    });
  }, []);

  console.log();
  return (
    <div className="patient-tab-block">
      <Tabs>
        <TabList>
          <Tab>
            Присутствуют({props.presentList && props.presentList.length})
          </Tab>
          <Tab>Выбывшие({props.quittingList && props.quittingList.length})</Tab>
        </TabList>
        <TabPanel>
          <Table list={props.presentList} title={props.titleTableNamePresent} />
        </TabPanel>
        <TabPanel>
          <Table
            list={props.quittingList}
            title={props.titleTableNameQuitting}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const mapStateToProps = ({
  quittingList,
  presentList,
  titleTableNameQuitting,
  titleTableNamePresent
}) => {
  return {
    quittingList,
    presentList,
    titleTableNameQuitting,
    titleTableNamePresent
  };
};

const mapDispatchToProps = {
  choiceQuittingList,
  choicePresentList
};
export default connect(mapStateToProps, mapDispatchToProps)(PatientTabBlock);
