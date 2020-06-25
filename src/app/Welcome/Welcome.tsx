import * as React from 'react';
import { Divider, Page, PageSection, Title, Text } from '@patternfly/react-core';
import THP from '../../assets/img/logos/thp.png';



const Welcome: React.FunctionComponent<{}> = () => (
  <Page>
    <PageSection>
      <Title headingLevel="h1" size="4xl">Welcome to JAGWR!</Title>
    </PageSection>
    <PageSection>
      <Text>
        The Joint Analytic Group Wicked Repo (JAGWR) is a secured analytics environment that enables the end to end data science pipeline from data acquisition to model deployment at scale.
      </Text>
      <img src={THP} style={{ height: '250px' }} />
    </PageSection>
  </Page>
)

export { Welcome };
