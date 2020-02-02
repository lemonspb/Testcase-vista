import React, { useEffect } from "react";
import "./PatientTabBlock.scss";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import { setQuittingList, setPresentList } from "../../Actions";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "../Table/Table";
import Services from "../../Services/fetch";

function PatientTabBlock(props) {

const services = new Services();

  useEffect(() => {
    services.getMedList("presentList").then(list => {
      props.setPresentList(list);
    });
    services.getMedList("quittingList").then(list => {
      props.setQuittingList(list);
    });
  }, []);

  return (
    <section className="patient-tab-block">
      <Tabs>
        <TabList>
          <Tab>
            Присутствуют({props.presentList && props.presentList.length})
          </Tab>
          <Tab>
            Выбывшие({props.quittingList && props.quittingList.length})
          </Tab>
        </TabList>
        <TabPanel>
          <Table 
          list={props.presentList} 
          title={props.titleTableNamePresent} />
        </TabPanel>
        <TabPanel>
          <Table
            list={props.quittingList}
            title={props.titleTableNameQuitting}/>
        </TabPanel>
      </Tabs>
    </section>
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
  setQuittingList,
  setPresentList
};
export default connect(mapStateToProps, mapDispatchToProps)(PatientTabBlock);
