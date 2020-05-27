import React, { Component } from "react";
import { Text, Button, Page, PageSection, Title } from '@patternfly/react-core';
import { Card, CardHeader, CardBody, CardFooter, CardActions } from '@patternfly/react-core';
import { Grid, GridItem } from '@patternfly/react-core';
import { Brand } from '@patternfly/react-core';
import { List, ListItem } from '@patternfly/react-core';
import axios from 'axios';

import argoLogo from '../../assets/img/logos/argo.png';
import jupyterhubLogo from '../../assets/img/logos/jupyter.png';
import supersetLogo from '../../assets/img/logos/superset.png';
import jupyterPreview from '../../assets/img/logos/jupyterpreview.png';

class Launcher extends Component<{}, { jupyterhub_url,argo_url,superset_url: string }> {
  constructor(props) {
    super(props);
    this.state = {
      jupyterhub_url: '',
      argo_url: '',
      superset_url: ''
    }
  }

  componentDidMount() {
    axios.get('api/config')
      .then(res => {
        console.log(res.data)
        this.setState({
          jupyterhub_url: res.data.jupyterhub_url,
          argo_url: res.data.argo_url,
          superset_url: res.data.superset_url
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Page>
        <PageSection>
          <Title headingLevel='h2' size="2xl">Open Data Hub Applications</Title>
        </PageSection>
        <PageSection>
          <Grid hasGutter>
            <GridItem span={4}>
              <Card>
                <CardHeader>
                  <Brand src={jupyterhubLogo} alt="Jupyter" style={{ height: '150px' }} />
                  <CardActions>
                    <Button component="a" href={this.state.jupyterhub_url} target="_blank" variant="primary">Launch Jupyter</Button>
                  </CardActions>
                </CardHeader>
                <CardHeader>
                  <Title headingLevel="h1" size="4xl">JupyterHub</Title>
                </CardHeader>
                <CardBody>
                  <Text>The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more.</Text>
                  <img src={jupyterPreview} style={{ height: '250px' }} />
                </CardBody>
                <CardFooter>

                </CardFooter>
              </Card>
            </GridItem>
            <GridItem span={4}>
              <Card>
                <CardHeader>
                  <Brand src={argoLogo} alt="Argo" style={{ height: '150px' }} />
                  <CardActions>
                    <Button component="a" href={this.state.argo_url} target="_blank" variant="primary">Launch Argo</Button>
                  </CardActions>
                </CardHeader>
                <CardHeader>
                  <Title headingLevel="h1" size="4xl">Argo</Title>
                </CardHeader>
                <CardBody><Text>Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. Argo Workflows is implemented as a Kubernetes CRD (Custom Resource Definition).</Text>
                  <List><ListItem>Define workflows where each step in the workflow is a container.</ListItem>
                    <ListItem>Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a graph (DAG).</ListItem>
                    <ListItem>Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo Workflows on Kubernetes.</ListItem>
                    <ListItem>Run CI/CD pipelines natively on Kubernetes without configuring complex software development products.</ListItem></List></CardBody>
              </Card>
            </GridItem>
            <GridItem span={4}>
              <Card>
                <CardHeader>
                  <Brand src={supersetLogo} alt="Superset" style={{ height: '150px' }} />
                  <CardActions>
                    <Button component="a" href={this.state.superset_url} target="_blank" variant="primary">Launch Superset</Button>
                  </CardActions>
                </CardHeader>
                <CardHeader>
                  <Title headingLevel="h1" size="4xl">Superset</Title>
                </CardHeader>
                <CardBody><Text>Apache Superset is a modern, enterprise-ready business intelligence web application</Text>
                  <List>
                    <ListItem>A rich set of data visualizations</ListItem>

                    <ListItem>An easy-to-use interface for exploring and visualizing data</ListItem>

                    <ListItem>Create and share dashboards</ListItem>

                    <ListItem>Enterprise-ready authentication with integration with major authentication providers (database, OpenID, LDAP, OAuth & REMOTE_USER through Flask AppBuilder)</ListItem>

                    <ListItem>An extensible, high-granularity security/permission model allowing intricate rules on who can access individual features and the dataset</ListItem>

                    <ListItem>A simple semantic layer, allowing users to control how data sources are displayed in the UI by defining which fields should show up in which drop-down and which aggregation and function metrics are made available to the user</ListItem>

                    <ListItem>Integration with most SQL-speaking RDBMS through SQLAlchemy</ListItem>

                    <ListItem>Deep integration with Druid.io</ListItem>
                  </List>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>

        </PageSection>
      </Page>
    )
  }
}

export default Launcher;