import React, { PureComponent } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

type StaticPageProps = {
	data: {
		markdownRemark: {
			html: string;
			frontmatter: {
				title: string;
			};
		};
	};
};

class StaticPage extends PureComponent<StaticPageProps> {
	render() {
		const { markdownRemark } = this.props.data;
		return (
			<Layout>
				<Container text style={{ paddingTop: '4em', paddingBottom: '2em' }}>
					<Header>{markdownRemark.frontmatter.title}</Header>
					<div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
				</Container>
			</Layout>
		);
	}
}

export default StaticPage;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
