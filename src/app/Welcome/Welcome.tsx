import * as React from 'react';
import { Divider, Page, PageSection, Title, Text } from '@patternfly/react-core';

const Welcome: React.FunctionComponent<{}> = () => (
  <Page>
    <PageSection>
      <Title headingLevel="h1" size="4xl">Welcome to Open Data Hub!</Title>
    </PageSection>
    <PageSection>
      <Text>
        Open Data Hub is a blueprint for building an AI as a service platform on Red Hat's Kubernetes-based OpenShift® Container Platform and Ceph Object Storage. It inherits from upstream efforts such as Kafka/Strimzi and Kubeflow, and is the foundation for Red Hat's internal data science and AI platform. Data scientists can create models using Jupyter notebooks, and select from popular tools such as TensorFlow™, scikit-learn, Apache Spark™ and more for developing models. Teams can spend more time solving critical business needs and less on installing and maintaining infrastructure with the Open Data Hub.
      </Text>
      <Text>&nbsp;</Text>
      <Divider style={{ width: '10%' }}></Divider>
      <Text>&nbsp;</Text>
      <Text>
        Open Data Hub is a meta-project that integrates open source projects into a practical solution. It aims to foster collaboration between communities, vendors, user-enterprises, and academics following open source best practices. The open source community can experiment and develop intelligent applications without incurring high costs and having to master the complexity of modern machine learning and artificial intelligence software stacks.
      </Text>
      <Text>&nbsp;</Text>
      <Divider style={{ width: '10%' }}></Divider>
      <Text>&nbsp;</Text>
      <Text>
        Read about the new features coming to Open Data Hub in our Project Road Map.
    </Text>
    </PageSection>
  </Page>
)

export { Welcome };
