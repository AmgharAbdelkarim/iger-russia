import React from "react"
import Layout from "../../components/layout"
import UniversitiesList from "./UniversitiesList"

const UniversitiesInRussia = () => {
  return (
    <Layout>
      <div className="my-20 max-w-screen-lg mx-auto">
        <h1 className="text-primary text-2xl font-bold text-center mb-7">
          Russian State Universities
        </h1>
        <UniversitiesList />
      </div>
    </Layout>
  )
}

export default UniversitiesInRussia
