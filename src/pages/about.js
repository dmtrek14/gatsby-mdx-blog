import React from "react"
import { useFormik } from 'formik';

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => {
// Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <p>My name is Danielle and I'm a full-stack .NET developer in Reno, Nevada. I'm a developer by day and an MFA candidate in Fiction at night. I live with a lot of rescue animals.</p>
    <hr/>
    <h2>Sign up to Follow Along</h2>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  </Layout>
  );
};
export default AboutPage