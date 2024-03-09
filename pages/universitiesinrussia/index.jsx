import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import UniversitiesList from './UniversitiesList';

const UniversitiesInRussia = () => {
 return (
  <Layout>
   <Head>
    <title>Russia Universities - Study IGER</title>
    <meta name="description" content="Russia Universities" />
    <meta property="og:title" content="Russia Universities" />
    <meta property="og:description" content="Russia Universities" />
    <meta
     property="og:url"
     content="https://www.studyiger.com/universitiesinrussia"
    />
    <meta property="og:type" content="website" />
   </Head>
   <div className="my-20 max-w-screen-lg mx-auto">
    <h1 className="text-primary text-2xl font-bold text-center mb-7">
     Russian State Universities
    </h1>
    <UniversitiesList />
   </div>
  </Layout>
 );
};

export default UniversitiesInRussia;
