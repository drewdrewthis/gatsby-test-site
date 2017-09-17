import React from 'react'
import Link from 'gatsby-link'
import {
  Hero,
  Layout
} from 'athenaeum';

const heroProps = {
  title: 'Compare and save on life insurance',
  subtitle: 'Get the protection you need—and save over 40%',
  linkText: 'Not sure how much you need?'
};

const IndexPage = () => (
  <div>
    <Hero { ...heroProps } />
    <Layout>Hellow!</Layout>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
