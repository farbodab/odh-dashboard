import * as React from 'react';
import { Page, PageSection, Title } from '@patternfly/react-core';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

const Launcher: React.FunctionComponent<{}> = () => (
  <Page>
    <PageSection>
      <Title headingLevel='h2' size="2xl">Open Data Hub Applications</Title>
    </PageSection>
    <PageSection>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </PageSection>
  </Page>
)

export { Launcher };