import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { lighten } from "polished";

import { Color } from "../Color";
import { Type } from "../Type";

const StyledTab = styled.div``;

export const Tab = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 1px solid ${Color.grey};
  border-bottom: 0;
  border-right: 0;
  color: ${Color.grey} !important;
  font-family: ${Type.header};

  ${props =>
    props.active &&
    `
    background: ${Color.grey};
    color: ${Color.white} !important;
  `}

  &:last-child {
    border-right: 1px solid ${Color.grey};
  }

  &:hover {
    background: ${lighten(0.1, Color.grey)};
    color: ${Color.white} !important;
    text-decoration: none !important;
    cursor: pointer;

    ${props =>
      props.active &&
      `
      background: ${Color.grey};
      cursor: default;
    `}
  }
`;

export const LinkTabs = ({ tabs, ...props }) => (
  <StyledTab {...props}>
    {tabs.map((tab, ix) => (
      <a href={tab.link} key={ix}>
        <Tab active={tab.active}>{tab.label}</Tab>
      </a>
    ))}
  </StyledTab>
);

export const TabContainer = styled.div`
  border: 1px solid ${Color.grey};
`;

export const TabContent = styled.div`
  padding: 1.5rem;
  min-height: 200px;
  ${props => (props.active ? "display: block;" : "display: none;")}
`;

const changeTab = ({ tabs, setTabs, ix }) => {
  tabs = tabs.map(tab => {
    const { active, ...rest } = tab;
    return rest;
  });

  tabs[ix].active = true;
  setTabs(tabs);
};

export const Tabs = ({ tabs, setTabs, tabProps, ...props }) => (
  <StyledTab {...props}>
    <div>
      {tabs.map((tab, ix) => (
        <Tab
          active={tab.active}
          key={ix}
          onClick={e => changeTab({ tabs, setTabs, ix })}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
    <TabContainer>
      {tabs.map((tab, ix) => (
        <TabContent key={ix} active={tab.active}>
          {tab.rendered && tab.rendered({ ...tabProps, tab })}
        </TabContent>
      ))}
    </TabContainer>
  </StyledTab>
);

export const DynamicTabs = ({ data, rendered, ...props }) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const org = data.map((tab, ix) => ({
        label: tab.attributes.label,
        active: ix <= 0,
        data: tab,
        rendered
      }));
      setTabs(org);
    }
    return () => {
      setTabs(null);
    };
  }, [data]);

  return <Tabs tabs={tabs} setTabs={setTabs} {...props} />;
};
