import React from "react"
import { ReactTypeformEmbed } from 'react-typeform-embed';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <ReactTypeformEmbed popup={false} style={{ position: 'static', height: 500 }} hideHeaders={true} hideFooter={true} url="https://reynadeloge.typeform.com/to/X56wVpwU" />
        </Layout>
    );
}

export default ContactPage;
