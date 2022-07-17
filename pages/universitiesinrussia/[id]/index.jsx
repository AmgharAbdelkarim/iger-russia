import listUniversities from "../../../assets/data/listUniversities.json"
import Head from "next/head"
import Layout from "../../../components/layout"
import Image from "next/image"

const UniversityDetails = ({ universityDetails }) => {
  const { name, images, aboutUniversity, logo } = universityDetails
  return (
    <Layout>
      <Head>
        <title>{name} - Study IGER</title>
        <meta name="description" content={`${name}`} />
        <meta property="og:title" content={`${name} - Study IGER`} />
        <meta property="og:description" content={`Learn more about ${name}`} />
        <meta
          property="og:url"
          content={`https://www.studyiger.com/universitiesinrussia/${logo}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="relative w-full h-[500px]">
        <Image
          layout="fill"
          objectFit="contain"
          src={"/images/" + images[0] + ".jpg"}
          alt={images[0]}
        />
      </div>
      <div className="my-20 p-5 lg:p-0 lg:max-w-screen-lg md:max-w-screen-md max-w-screen-lg mx-auto">
        <h1 className="text-primary text-2xl font-bold text-center mb-5">
          {name}{" "}
        </h1>

        <h3 className="text-secondary text-lg font-semibold my-3">
          About Russian Studies {name}
        </h3>
        <div className="md:float-right md:mx-6 lg:float-right lg:mx-6">
          <Image
            width="300"
            height="200"
            src={"/images/" + images[1] + ".jpg"}
            alt={images[1]}
          />{" "}
        </div>
        <div className="inline">
          <p className="text-neutral9 text-sm font-normal">{aboutUniversity}</p>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { data } = listUniversities
  const universityDetails = data.filter((univ) => univ.logo === query.id)[0]
  return { props: { universityDetails } }
}

export default UniversityDetails
