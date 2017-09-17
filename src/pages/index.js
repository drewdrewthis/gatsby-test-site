import React from 'react'
import Link from 'gatsby-link'
import {
  Button,
  Hero
} from 'athenaeum';

const heroProps = {
  title: 'Compare and save on life insurance',
  subtitle: 'Get the protection you need—and save over 40%',
  linkText: 'Not sure how much you need?'
};

// Validate Athenaeum components for better error handling
if (!Button) { throw new Error("Button component didn't load. Check Athenaeum."); }
if (!Hero) { throw new Error("Hero component didn't load. Check Athenaeum."); }

const IndexPage = (data) => {
  console.log(data);
  return (
    <div>
      <Hero { ...heroProps  } />
      <Button variant='action'><Link to="/page-2/">Go to page 2</Link></Button>
    </div>
  )
};

export default IndexPage
