import listUniversities from "../../../assets/data/listUniversities.json"
import Layout from "../../../components/layout"
import Image from "next/image"

const UniversityDetails = ({ universityDetails }) => {
  console.log({ universityDetails })
  const { name, image, aboutUniversity } = universityDetails
  return (
    <Layout>
      <div className="relative w-full h-[500px]">
        <Image
          layout="fill"
          objectFit="contain"
          src={"/images/" + image + ".jpg"}
          alt={image}
        />
      </div>
      <div className="my-20 p-5 lg:p-0 lg:max-w-screen-lg md:max-w-screen-md max-w-screen-lg mx-auto">
        <h1 className="text-primary text-2xl font-bold text-center mb-5">
          {name}{" "}
        </h1>

        <h3 className="text-secondary text-lg font-semibold my-3">
          About Russian Studies {name}
        </h3>
        <p className="text-neutral9 text-sm font-normal">{aboutUniversity}</p>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { data } = listUniversities
  const universityDetails = data.filter((univ) => univ.image === query.id)[0]
  return { props: { universityDetails } }
}

export default UniversityDetails
